import React, { useState } from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import confetti from 'canvas-confetti';

const questions = [
  {
    question: 'What is a Trigger in Salesforce?',
    options: [
      'A UI component',
      'Code that executes in response to DML events',
      'A type of Flow',
      'A validation rule',
    ],
    correctIndex: 1,
  },
  {
    question: 'Which language is used to query Salesforce data?',
    options: ['SQL', 'SOQL', 'Java', 'ApexQL'],
    correctIndex: 1,
  },
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const fireConfetti = () => {
    confetti({
      particleCount: 500,
      spread: 90,
      origin: { y: 0.6 },
    });
  };

  const handleNext = () => {
    const isCorrect = selected === questions[currentQuestion].correctIndex;
    const newScore = isCorrect ? score + 1 : score;

    if (isCorrect) {
      setScore(newScore);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setFinished(true);

      const passingScore = Math.ceil(questions.length * 0.7); // 70% para aprobar

      if (newScore >= passingScore) {
        setTimeout(() => {
          fireConfetti();
        }, 300);
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <Layout title="Quiz" description="Salesforce Quiz">
      <main
        style={{
          maxWidth: '600px',
          margin: '60px auto',
          padding: '20px',
          textAlign: 'center',
        }}
      >
        <Heading as="h1">Salesforce Developer Quiz</Heading>

        {!finished ? (
          <>
            <h3>{questions[currentQuestion].question}</h3>

            <div style={{ marginTop: '20px' }}>
              {questions[currentQuestion].options.map((option, index) => (
                <div key={index} style={{ marginBottom: '10px' }}>
                  <button
                    onClick={() => setSelected(index)}
                    style={{
                      padding: '10px 20px',
                      width: '100%',
                      background:
                        selected === index ? '#2e8555' : '#f1f1f1',
                      color: selected === index ? 'white' : 'black',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    {option}
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={selected === null}
              style={{
                marginTop: '20px',
                padding: '10px 30px',
              }}
            >
              Next
            </button>
          </>
        ) : (
          <>
            <h2>Quiz Finished 🎉</h2>
            <p>
              Your Score: {score} / {questions.length}
            </p>
            <button
              onClick={restartQuiz}
              style={{
                marginTop: '20px',
                padding: '10px 30px',
              }}
            >
              Restart Quiz
            </button>
          </>
        )}
      </main>
    </Layout>
  );
}