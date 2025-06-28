import React, { useEffect, useState } from "react";

import axios from "axios";

import Button from "../components/Button";
import { buildApiUrl } from "../utils/api";

function Home({ initialJokes = [] }) {
  const [jokes, setJokes] = useState(initialJokes);
  const [filteredJokes, setFilteredJokes] = useState(initialJokes);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funktion zum Laden eines zufälligen Witzes von der API
  const fetchJoke = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const url = buildApiUrl();
      const response = await axios.get(url);
      setJokes([response.data]); // Ein neues Array mit einem Witz
      setFilteredJokes([response.data]);
      setSearchTerm(""); // Suche zurücksetzen
    } catch {
      setError("Fehler beim Laden des Witzes. Bitte erneut versuchen.");
    } finally {
      setIsLoading(false);
    }
  };

  // Filtere die Witze basierend auf dem Suchbegriff
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredJokes(jokes);
    } else {
      const filtered = jokes.filter(
        (j) =>
          j.setup.toLowerCase().includes(searchTerm.toLowerCase()) ||
          j.punchline.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredJokes(filtered);
    }
  }, [searchTerm, jokes]);

  // Handler für Sucheingabe
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <h1>Willkommen bei JokeHub!</h1>
      <p>
        Hier kannst du lustige Witze entdecken, eigene hinzufügen und verwalten.
      </p>

      <Button onClick={fetchJoke} disabled={isLoading}>
        {isLoading ? "Lädt..." : "Witz anzeigen!"}
      </Button>

      <input
        type="text"
        placeholder="Suche Witze..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ marginTop: "1rem", padding: "0.5rem", width: "100%" }}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      {filteredJokes.length > 0 ? (
        filteredJokes.map((joke) => (
          <div key={joke.id} style={{ marginTop: "1rem" }}>
            <p>
              <strong>{joke.setup}</strong>
            </p>
            <p>{joke.punchline}</p>
          </div>
        ))
      ) : (
        <p>Keine Witze gefunden.</p>
      )}
    </div>
  );
}

export default Home;
