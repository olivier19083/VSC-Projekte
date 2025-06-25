import React, { useState } from "react";

import { Link } from "react-router-dom";

function Home({ jokes = [] }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtert die Witze nach Suchbegriff im Setup (case-insensitive)
  const filteredJokes = jokes.filter((joke) =>
    joke.setup.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Willkommen bei JokeHub!</h1>
      <p>
        Hier kannst du lustige Witze entdecken, eigene hinzufügen und verwalten.
      </p>

      <input
        type="text"
        placeholder="Suche"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Suche"
      />

      <ul>
        {filteredJokes.map((joke) => (
          <li key={joke.id}>
            <strong>{joke.setup}</strong> – {joke.punchline} ({joke.type})
          </li>
        ))}
      </ul>

      <nav>
        <ul>
          <li>
            <Link to="/add">Neuen Witz hinzufügen</Link>
          </li>
          <li>
            <Link to="/myjokes">Meine Witze ansehen</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
