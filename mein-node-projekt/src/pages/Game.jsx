import React, { useState } from "react";

import Button from "../components/Button";
import GameSession from "./GameSession";

const Game = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showCategorySelector, setShowCategorySelector] = useState(true);
  const [apiQuestions, setApiQuestions] = useState([]);

  const fetchQuestions = async (category) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://example.com/api/questions?category=${category}`
      );
      if (!response.ok) throw new Error("Fehler beim Laden der Fragen.");
      const data = await response.json();
      setApiQuestions(data.questions);
    } catch (err) {
      setError(err.message);
      setShowCategorySelector(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryClick = async (category) => {
    setShowCategorySelector(false);
    await fetchQuestions(category);
  };

  // Erweiterte Reset-Funktion (Schritt 5.2)
  const handleResetGame = () => {
    setShowCategorySelector(true);
    setApiQuestions([]);
    setError(null); // Fehler zurücksetzen
    setIsLoading(false); // Loading zurücksetzen
  };

  return (
    <div className="game">
      {isLoading && (
        <div className="loading">
          <h2>🔄 Fragen werden geladen...</h2>
          <p>Bitte warten Sie einen Moment.</p>
        </div>
      )}

      {error && (
        <div className="error">
          <h2>❌ Fehler aufgetreten</h2>
          <p>{error}</p>
          <Button
            text="Zurück zur Auswahl"
            onAnswerClick={() => {
              setError(null);
              setShowCategorySelector(true);
            }}
          />
        </div>
      )}

      {showCategorySelector && !isLoading && !error && (
        <div>
          <h2>Wähle eine Kategorie:</h2>
          <div className="category-buttons">
            <Button
              text="Sport"
              onAnswerClick={() => handleCategoryClick("sports")}
            />
            <Button
              text="Spiele"
              onAnswerClick={() => handleCategoryClick("games")}
            />
            <Button
              text="Filme"
              onAnswerClick={() => handleCategoryClick("movies")}
            />
          </div>
        </div>
      )}

      {!showCategorySelector &&
        !isLoading &&
        !error &&
        apiQuestions.length > 0 && (
          <GameSession questions={apiQuestions} onResetGame={handleResetGame} />
        )}
    </div>
  );
};

export default Game;
