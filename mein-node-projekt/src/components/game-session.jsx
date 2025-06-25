import React, { useState } from "react";

import Button from "./Button";

const GameSession = ({ questions, onResetGame }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [showScore, setShowScore] = useState(false);

  if (!questions || questions.length === 0) {
    return <h3>Keine Fragen verfügbar</h3>;
  }

  const currentQuestion = questions[questionIndex];
  console.log("Aktuelle Frage:", currentQuestion.question);

  const handleAnswerClick = (selectedAnswer) => {
    if (isAnswered) return;

    if (selectedAnswer === currentQuestion.correctAnswer) {
      setFeedback("Gut gemacht!");
      setScore(score + 1);
    } else {
      setFeedback(
        `Leider falsch. Richtig wäre: ${currentQuestion.correctAnswer}`
      );
    }

    setIsAnswered(true);
  };

  const handleNextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setFeedback(null);
    setIsAnswered(false);
  };

  // Schritt 2.9 & 2.11: resetGame-Funktion
  const resetGame = () => {
    setQuestionIndex(0);
    setFeedback(null);
    setScore(0);
    setIsAnswered(false);
    setShowScore(false);

    if (onResetGame) {
      onResetGame(); // Parent-Komponente informieren
    }
  };

  if (showScore) {
    return (
      <div>
        <h2>Spiel beendet!</h2>
        <p>
          Dein Ergebnis: {score} von {questions.length}
        </p>
        <Button text="Neues Spiel" onAnswerClick={resetGame} />
      </div>
    );
  }

  return (
    <div>
      <h2>{currentQuestion.question}</h2>
      <div className="buttonbar">
        {currentQuestion.answers.map((answer, index) => (
          <Button
            key={index}
            text={answer}
            onAnswerClick={() => handleAnswerClick(answer)}
            disabled={isAnswered}
          />
        ))}
      </div>

      {feedback && <p>{feedback}</p>}
      <p>Punktestand: {score}</p>

      {feedback && questionIndex < questions.length - 1 && (
        <Button text="Weiter" onAnswerClick={handleNextQuestion} />
      )}

      {feedback && questionIndex === questions.length - 1 && !showScore && (
        <Button
          text="Spiel beenden"
          onAnswerClick={() => {
            setShowScore(true);
            setFeedback(null);
          }}
        />
      )}
    </div>
  );
};

export default GameSession;
