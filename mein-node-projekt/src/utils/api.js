import he from "he";

export const API_BASE_URL = "https://opentdb.com/api.php";

// Kategorie-IDs der OpenTDB API
export const CATEGORIES = {
  sports: 21,
  games: 15, // Video Games
  movies: 11, // Entertainment: Film
};

// Hilfsfunktion zum Erstellen der API-URL
export const buildApiUrl = (category, amount = 10, difficulty = "medium") => {
  const categoryId = CATEGORIES[category];

  return `${API_BASE_URL}?amount=${amount}&category=${categoryId}&type=multiple&difficulty=${difficulty}`;
};

// Funktion zur Anpassung der API-Daten an das App-Format und zum Dekodieren von HTML-Entities
export const formatApiQuestions = (apiResults) => {
  return apiResults.map((apiQuestion) => {
    // Alle Antworten sammeln und dekodieren
    const decodedIncorrectAnswers = apiQuestion.incorrect_answers.map(
      (answer) => he.decode(answer)
    );
    const decodedCorrectAnswer = he.decode(apiQuestion.correct_answer);

    // Alle Antworten in neues Array übertragen
    const allAnswers = [...decodedIncorrectAnswers, decodedCorrectAnswer];

    // Zufällig mischen
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    return {
      question: he.decode(apiQuestion.question), // Frage dekodieren
      answers: shuffledAnswers,
      correctAnswer: decodedCorrectAnswer, // dekodierte korrekte Antwort
    };
  });
};
