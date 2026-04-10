import React, { useState, useEffect } from 'react';
import './styles.css';
import confetti from 'canvas-confetti';

export default function QuestionSkeleton({ questions = [], onFinish }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timer, setTimer] = useState(20);
  const [showAnswer, setShowAnswer] = useState(false);

  if (!questions || questions.length === 0) {
    return <div>No questions found for this category.</div>;
  }

  const question = questions[currentIdx];

  useEffect(() => {
    if (timer > 0 && !showAnswer) {
      const t = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(t);
    } else if (timer === 0) {
      setShowAnswer(true);
    }
  }, [timer, showAnswer]);

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setTimer(20);
      setShowAnswer(false);
    } else {
      confetti();
      onFinish();
    }
  };

  return (
    <div className="hoot-question-view">
      <div className="hoot-timer">{timer}</div>
      <h2 className="hoot-question-text">{question.question}</h2>

      <div className="hoot-options-grid">
        {question.options.map((opt, i) => (
          <div 
            key={i} 
            className={`hoot-option-card ${
              ['hoot-option-red', 'hoot-option-blue', 'hoot-option-yellow', 'hoot-option-green'][i]
            } ${showAnswer && i === question.correctIndex ? 'correct-highlight' : ''}`}
            onClick={() => setShowAnswer(true)}
          >
            <span className="hoot-option-symbol">
              {['▲', '◆', '●', '■'][i]}
            </span>
            {opt}
          </div>
        ))}
      </div>

      {showAnswer && (
        <button 
          className="hoot-action-btn"
          style={{ alignSelf: 'center', padding: '1rem 3rem', background: 'white', color: '#1a1a2e', fontWeight: 'bold', border: 'none', borderRadius: '10px', marginTop: '2rem' }}
          onClick={handleNext}
        >
          {currentIdx < questions.length - 1 ? 'Next Question' : 'Finish Game'}
        </button>
      )}
    </div>
  );
}
