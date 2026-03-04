import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import './Quiz.css';

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
      <div className="quiz-container quiz-results">
        <h3>{passed ? '🎉 You Passed!' : '❌ Try Again'}</h3>
        <p>
          You scored {score} / {selectedQuestions.length}
        </p>
        <button className="quiz-retry-btn" onClick={resetQuiz}>
          Retry (new random 5)
        </button>
      </div>
    );
  }

  const question = selectedQuestions[current];

  return (
    <div className="quiz-container">

      {/* 🔵 Progreso circular */}
      <div className="quiz-progress">
        {selectedQuestions.map((_, index) => {

          let statusClass = 'unanswered';

          if (answers[index] !== undefined) {
            statusClass =
              answers[index] === selectedQuestions[index].correctIndex
                ? 'correct'
                : 'incorrect';
          }

          if (index === current) {
            statusClass = 'current';
          }

          return (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`quiz-progress-item ${statusClass}`}
            >
              {index + 1}
            </div>
          );
        })}
      </div>

      <h3 className="quiz-question-title">{question.question}</h3>

      {question.options.map((option, index) => (
        <div key={index} className="quiz-option">
          <button
            onClick={() => handleAnswer(index)}
            className={`quiz-option-btn ${answers[current] === index ? 'selected' : ''}`}
          >
            {option}
          </button>
        </div>
      ))}

      <button
        className="quiz-action-btn"
        onClick={nextQuestion}
        disabled={answers[current] === undefined}
      >
        {current === selectedQuestions.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  );
}