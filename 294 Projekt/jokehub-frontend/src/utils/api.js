export const API_BASE_URL = "https://official-joke-api.appspot.com";

// Hilfsfunktion zum Erstellen der API-URL für einen zufälligen Witz
export const buildApiUrl = () => {
  return `${API_BASE_URL}/random_joke`;
};
