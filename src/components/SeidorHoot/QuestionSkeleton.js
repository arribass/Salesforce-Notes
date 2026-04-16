import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useSupabase } from '../../utils/supabaseClient';
import { useAuth } from '../../utils/AuthProvider';
import './styles.css';

export default function QuestionSkeleton({ questions = [], onFinish, sessionInfo, isHost }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timer, setTimer] = useState(20);
  const [showAnswer, setShowAnswer] = useState(false);
  const [points, setPoints] = useState(0);
  
  const supabase = useSupabase();
  const { user } = useAuth();

  useEffect(() => {
    if (!questions || questions.length === 0) return;
    
    // 1. Players: Sync currentIdx from DB
    let sessionSub;
    if (!isHost && sessionInfo) {
      sessionSub = supabase
        .channel(`game_sync_${sessionInfo.id}`)
        .on('postgres_changes', {
          event: 'UPDATE',
          schema: 'public',
          table: 'hoot_sessions',
          filter: `id=eq.${sessionInfo.id}`
        }, (payload) => {
          if (payload.new.current_question_index !== undefined) {
            setCurrentIdx(payload.new.current_question_index);
            setTimer(20);
            setShowAnswer(false);
          }
          if (payload.new.status === 'FINISHED') {
            onFinish(points);
          }
        })
        .subscribe();
    }

    return () => {
      if (sessionSub) supabase.removeChannel(sessionSub);
    };
  }, [supabase, sessionInfo, isHost, questions.length, onFinish, points]);

  useEffect(() => {
    if (timer > 0 && !showAnswer) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    } else if (timer === 0) {
      setShowAnswer(true);
    }
  }, [timer, showAnswer]);

  const handleOptionClick = async (idx) => {
    if (showAnswer) return;
    const isCorrect = idx === questions[currentIdx].correctIndex;
    
    if (isCorrect) {
      const newPoints = points + 50;
      setPoints(newPoints);
      
      // Sync score to DB for leaderboard
      if (sessionInfo && user) {
        await supabase
          .from('hoot_participants')
          .update({ score: newPoints })
          .eq('session_id', sessionInfo.id)
          .eq('user_id', user.id);
      }
    }
    setShowAnswer(true);
  };

  const handleNext = async () => {
    if (!isHost) return;

    if (currentIdx < questions.length - 1) {
      const nextIdx = currentIdx + 1;
      
      // Update DB to sync players
      await supabase
        .from('hoot_sessions')
        .update({ current_question_index: nextIdx })
        .eq('id', sessionInfo.id);

      setCurrentIdx(nextIdx);
      setTimer(20);
      setShowAnswer(false);
    } else {
      // Game Over
      await supabase
        .from('hoot_sessions')
        .update({ status: 'FINISHED' })
        .eq('id', sessionInfo.id);
        
      confetti();
      onFinish(points);
    }
  };

  if (!questions || questions.length === 0) {
    return <div>No se han encontrado preguntas para esta categoría.</div>;
  }

  const question = questions[currentIdx];

  return (
    <div className="hoot-question-view">
      <div className="hoot-timer-container">
        <div className="hoot-timer">{timer}</div>
        <div style={{ position: 'absolute', top: '-40px', right: '0', fontSize: '1.2rem', fontWeight: '800', color: 'var(--astra-gold)' }}>
          Puntos: {points}
        </div>
      </div>
      
      <div className="astra-card">
        <h2 className="hoot-question-text">{question.question}</h2>
      </div>

      <div className="hoot-options-grid">
        {question.options.map((opt, i) => (
          <div 
            key={i} 
            className={`hoot-option-card astra-card ${
              ['astra-opt-0', 'astra-opt-1', 'astra-opt-2', 'astra-opt-3'][i]
            } ${showAnswer && i === question.correctIndex ? 'correct-highlight' : ''}`}
            onClick={() => handleOptionClick(i)}
          >
            <div className="hoot-indicator">
              {['A', 'B', 'C', 'D'][i]}
            </div>
            {opt}
          </div>
        ))}
      </div>

      {showAnswer && isHost && (
        <button 
          className="hoot-action-btn"
          style={{ alignSelf: 'center', marginTop: '2rem' }}
          onClick={handleNext}
        >
          {currentIdx < questions.length - 1 ? 'Siguiente Pregunta' : 'Finalizar Partida para Todos'}
        </button>
      )}

      {showAnswer && !isHost && currentIdx < questions.length - 1 && (
        <p style={{ marginTop: '2rem', opacity: 0.7, fontStyle: 'italic', textAlign: 'center' }}>
          Esperando a que el Host pase a la siguiente pregunta...
        </p>
      )}
    </div>
  );
}
