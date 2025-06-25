import React from "react";

import { Link } from "react-router-dom";

function MyJokes({ userJokes, deleteJoke }) {
  return (
    <div>
      <h2>Meine Witze</h2>
      {userJokes.length === 0 ? (
        <p>
          Keine Witze vorhanden.{" "}
          <Link to="/add">Füge einen neuen Witz hinzu.</Link>
        </p>
      ) : (
        <ul>
          {userJokes.map((joke) => (
            <li key={joke.id}>
              <strong>{joke.setup}</strong> - {joke.punchline} ({joke.type}){" "}
              <Link to={`/edit/${joke.id}`}>Bearbeiten</Link>{" "}
              <button onClick={() => deleteJoke(joke.id)}>Löschen</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyJokes;
