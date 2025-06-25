import React, { useState } from "react";

const QuestionManager = () => {
  const [question, setQuestion] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [incorrectAnswer1, setIncorrectAnswer1] = useState("");
  const [incorrectAnswer2, setIncorrectAnswer2] = useState("");
  const [incorrectAnswer3, setIncorrectAnswer3] = useState("");
  const [category, setCategory] = useState("custom");
  const [difficulty, setDifficulty] = useState("medium");

  const [questionError, setQuestionError] = useState("");
  const [correctAnswerError, setCorrectAnswerError] = useState("");
  const [incorrectAnswer1Error, setIncorrectAnswer1Error] = useState("");
  const [incorrectAnswer2Error, setIncorrectAnswer2Error] = useState("");
  const [incorrectAnswer3Error, setIncorrectAnswer3Error] = useState("");
  const [duplicateError, setDuplicateError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleQuestionChange = (e) => setQuestion(e.target.value);
  const handleCorrectAnswerChange = (e) => setCorrectAnswer(e.target.value);
  const handleIncorrectAnswer1Change = (e) =>
    setIncorrectAnswer1(e.target.value);
  const handleIncorrectAnswer2Change = (e) =>
    setIncorrectAnswer2(e.target.value);
  const handleIncorrectAnswer3Change = (e) =>
    setIncorrectAnswer3(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleDifficultyChange = (e) => setDifficulty(e.target.value);

  const validateForm = () => {
    let isValid = true;

    if (!question.trim()) {
      setQuestionError("Frage ist erforderlich");
      isValid = false;
    } else if (question.length < 5) {
      setQuestionError("Frage muss mindestens 5 Zeichen haben");
      isValid = false;
    }

    if (!correctAnswer.trim()) {
      setCorrectAnswerError("Richtige Antwort ist erforderlich");
      isValid = false;
    }

    if (!incorrectAnswer1.trim()) {
      setIncorrectAnswer1Error(
        "Mindestens eine falsche Antwort ist erforderlich"
      );
      isValid = false;
    }

    if (!incorrectAnswer2.trim()) {
      setIncorrectAnswer2Error("Falsche Antwort ist erforderlich");
      isValid = false;
    }

    if (!incorrectAnswer3.trim()) {
      setIncorrectAnswer3Error("Falsche Antwort ist erforderlich");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Fehler zurücksetzen
    setQuestionError("");
    setCorrectAnswerError("");
    setIncorrectAnswer1Error("");
    setIncorrectAnswer2Error("");
    setIncorrectAnswer3Error("");
    setDuplicateError("");

    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      // Beispielhafte vorhandene Fragen
      const existingQuestions = ["Was ist React?", "Was ist JavaScript?"];

      if (existingQuestions.includes(question.trim())) {
        setDuplicateError("Diese Frage wurde bereits erstellt.");
        setIsSubmitting(false);
        return;
      }

      const newQuestion = {
        question,
        correctAnswer,
        incorrectAnswers: [
          incorrectAnswer1,
          incorrectAnswer2,
          incorrectAnswer3,
        ],
        category,
        difficulty,
      };

      console.log("Neue Frage erstellt:", newQuestion);

      // Felder zurücksetzen
      setQuestion("");
      setCorrectAnswer("");
      setIncorrectAnswer1("");
      setIncorrectAnswer2("");
      setIncorrectAnswer3("");
      setCategory("custom");
      setDifficulty("medium");

      setIsSubmitting(false);
      alert("Frage erfolgreich erstellt!");
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Frage</label>
        <textarea value={question} onChange={handleQuestionChange} />
        {questionError && <p className="error">{questionError}</p>}
      </div>

      {/* Anzeige für Duplikatfehler */}
      {duplicateError && <p className="error">{duplicateError}</p>}

      <div className="form-group">
        <label>Richtige Antwort</label>
        <input
          type="text"
          value={correctAnswer}
          onChange={handleCorrectAnswerChange}
        />
        {correctAnswerError && <p className="error">{correctAnswerError}</p>}
      </div>

      <div className="answers-grid">
        <div className="form-group">
          <label>Falsche Antwort 1</label>
          <input
            type="text"
            value={incorrectAnswer1}
            onChange={handleIncorrectAnswer1Change}
          />
          {incorrectAnswer1Error && (
            <p className="error">{incorrectAnswer1Error}</p>
          )}
        </div>

        <div className="form-group">
          <label>Falsche Antwort 2</label>
          <input
            type="text"
            value={incorrectAnswer2}
            onChange={handleIncorrectAnswer2Change}
          />
          {incorrectAnswer2Error && (
            <p className="error">{incorrectAnswer2Error}</p>
          )}
        </div>

        <div className="form-group">
          <label>Falsche Antwort 3</label>
          <input
            type="text"
            value={incorrectAnswer3}
            onChange={handleIncorrectAnswer3Change}
          />
          {incorrectAnswer3Error && (
            <p className="error">{incorrectAnswer3Error}</p>
          )}
        </div>
      </div>

      <div className="form-row">
        <label>Kategorie</label>
        <select value={category} onChange={handleCategoryChange}>
          <option value="custom">Custom</option>
          <option value="science">Wissenschaft</option>
          <option value="history">Geschichte</option>
        </select>
      </div>

      <div className="form-row">
        <label>Schwierigkeit</label>
        <select value={difficulty} onChange={handleDifficultyChange}>
          <option value="easy">Einfach</option>
          <option value="medium">Mittel</option>
          <option value="hard">Schwer</option>
        </select>
      </div>

      <div className="form-submit">
        <button type="submit" disabled={isSubmitting} className="submit-button">
          {isSubmitting ? "Speichern..." : "Frage erstellen"}
        </button>
      </div>
    </form>
  );
};

export default QuestionManager;
