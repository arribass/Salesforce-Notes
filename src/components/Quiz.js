import React, { useState } from 'react';
import confetti from 'canvas-confetti';

export default function Quiz({ questions = [], passingPercentage = 0.7 }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  if (!questions.length) {
    return <p>No questions available.</p>;
  }

  const passingScore = Math.ceil(questions.length * passingPercentage);

  const fireConfetti = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 40,
        spread: 70,
        origin: { y: 0.6 },
      });
    }, 250);
  };

  const handleNext = () => {
    const isCorrect = selected === questions[current].correctIndex;
    const newScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(newScore);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setFinished(true);

      if (newScore >= passingScore) {
        setTimeout(() => {
          fireConfetti();
        }, 300);
      }
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  const passed = score >= passingScore;
  const question = questions[current];

  if (finished) {
    return (
      <div style={{ marginTop: '20px' }}>
        <h2>{passed ? '🎉 You Passed!' : '❌ Try Again'}</h2>
        <p>
          Final Score: {score} / {questions.length}
        </p>
        <button onClick={restart} style={{ marginTop: '10px' }}>
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>{question.question}</h3>

      {question.options.map((option, index) => (
        <div key={index}>
          <button
            onClick={() => setSelected(index)}
            style={{
              margin: '5px',
              padding: '8px 16px',
              background: selected === index ? '#2e8555' : '#eee',
              color: selected === index ? 'white' : 'black',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {option}
          </button>
        </div>
      ))}

      <button
        onClick={handleNext}
        disabled={selected === null}
        style={{ marginTop: '10px', padding: '8px 20px' }}
      >
        Next
      </button>
    </div>
  );
}