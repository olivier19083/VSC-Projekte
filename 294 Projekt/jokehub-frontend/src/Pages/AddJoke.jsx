import React from "react";

export default function MyJokes({ jokes = [], deleteJoke }) {
  const userJokes = jokes || [];

  return (
    <div>
      <h2>Meine Witze</h2>
      {userJokes.length === 0 ? (
        <p>Keine Witze vorhanden.</p>
      ) : (
        <ul>
          {userJokes.map(({ id, setup, punchline, type }) => (
            <li key={id}>
              <strong>{setup}</strong> - {punchline} ({type})
              <a data-discover="true" href={`/edit-joke/${id}`}>
                Bearbeiten
              </a>
              <button onClick={() => deleteJoke(id)}>Löschen</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
