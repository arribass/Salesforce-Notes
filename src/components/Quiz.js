import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';

export default function Quiz({ 
  questions = [], 
  maxQuestions = 5,
  passingPercentage = 0.7 // 70% para aprobar
}) {

  // 🔀 Seleccionamos máximo 5 preguntas aleatorias SOLO una vez
  const selectedQuestions = useMemo(() => {
    const shuffled = [...questions]
      .sort(() => 0.5 - Math.random());

    return shuffled.slice(0, Math.min(maxQuestions, questions.length));
  }, [questions, maxQuestions]);

  // 🧠 Estado
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  if (!selectedQuestions.length) {
    return <p>No questions available.</p>;
  }

  const passingScore = Math.ceil(
    selectedQuestions.length * passingPercentage
  );

  // 🎉 Confetti PRO
  const fireConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      // lado izquierdo
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { x: 0, y: 0.6 },
      });

      // lado derecho
      confetti({
        particleCount: 30,
        spread: 70,
        origin: { x: 1, y: 0.6 },
      });

    }, 250);
  };

  const handleAnswer = (index) => {
    setAnswers({ ...answers, [current]: index });
  };

  const nextQuestion = () => {
    if (current < selectedQuestions.length - 1) {
      setCurrent(current + 1);
    } else {
      setShowResults(true);

      const finalScore = Object.keys(answers).reduce((acc, key) => {
        return answers[key] === selectedQuestions[key].correctIndex
          ? acc + 1
          : acc;
      }, 0) + (
        answers[current] === selectedQuestions[current].correctIndex ? 1 : 0
      );

      if (finalScore >= passingScore) {
        setTimeout(() => {
          fireConfetti();
        }, 400);
      }
    }
  };

  const resetQuiz = () => {
    window.location.reload(); // nuevo shuffle limpio
  };

  const score = Object.keys(answers).reduce((acc, key) => {
    return answers[key] === selectedQuestions[key].correctIndex
      ? acc + 1
      : acc;
  }, 0);

  const passed = score >= passingScore;

  if (showResults) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h3>{passed ? '🎉 You Passed!' : '❌ Try Again'}</h3>
        <p>
          You scored {score} / {selectedQuestions.length}
        </p>
        <button onClick={resetQuiz}>
          Retry (new random 5)
        </button>
      </div>
    );
  }

  const question = selectedQuestions[current];

  return (
    <div style={{ marginTop: '20px' }}>

      {/* 🔵 Progreso circular */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
        {selectedQuestions.map((_, index) => {

          let bg = '#e0e0e0';

          if (answers[index] !== undefined) {
            bg =
              answers[index] === selectedQuestions[index].correctIndex
                ? '#2e8555'
                : '#d9534f';
          }

          if (index === current) {
            bg = '#3578e5';
          }

          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              style={{
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                background: bg,
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      <h3>{question.question}</h3>

      {question.options.map((option, index) => (
        <div key={index} style={{ marginBottom: '8px' }}>
          <button
            onClick={() => handleAnswer(index)}
            style={{
              width: '100%',
              padding: '8px',
              background:
                answers[current] === index ? '#3578e5' : '#f0f0f0',
              color: answers[current] === index ? 'white' : 'black',
              border: '1px solid #ccc',
              cursor: 'pointer'
            }}
          >
            {option}
          </button>
        </div>
      ))}

      <button
        onClick={nextQuestion}
        disabled={answers[current] === undefined}
        style={{ marginTop: '10px' }}
      >
        {current === selectedQuestions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}