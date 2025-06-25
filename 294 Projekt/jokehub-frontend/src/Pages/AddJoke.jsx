import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

function AddJoke({ addJoke }) {
  const [setup, setSetup] = useState("");
  const [punchline, setPunchline] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setup && punchline && type) {
      addJoke({ setup, punchline, type });
      navigate("/myjokes"); // Nach dem Hinzufügen zur Witzliste navigieren
    } else {
      alert("Bitte alle Felder ausfüllen!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Neuen Witz hinzufügen</h2>
      <input
        type="text"
        placeholder="Setup"
        value={setup}
        onChange={(e) => setSetup(e.target.value)}
      />
      <input
        type="text"
        placeholder="Punchline"
        value={punchline}
        onChange={(e) => setPunchline(e.target.value)}
      />
      <input
        type="text"
        placeholder="Kategorie"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button type="submit">Speichern</button>
    </form>
  );
}

export default AddJoke;
