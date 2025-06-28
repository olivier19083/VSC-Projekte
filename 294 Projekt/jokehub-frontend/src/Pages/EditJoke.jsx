import React, { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

function EditJoke({ userJokes, editJoke }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [joke, setJoke] = useState({ setup: "", punchline: "", type: "" });
  const [error, setError] = useState("");

  useEffect(() => {
    const jokeToEdit = userJokes.find((j) => j.id === Number(id));
    if (jokeToEdit) {
      setJoke(jokeToEdit);
    } else {
      setError("Witz nicht gefunden.");
    }
  }, [id, userJokes]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJoke((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!joke.setup.trim() || !joke.punchline.trim() || !joke.type.trim()) {
      setError("Bitte alle Felder ausfüllen");
      return;
    }
    editJoke(joke.id, joke);
    navigate("/myjokes");
  };

  if (error) return <div style={{ color: "red" }}>{error}</div>;

  return (
    <div>
      <h2>Witz bearbeiten</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="setup"
          value={joke.setup}
          onChange={handleChange}
          placeholder="Setup"
        />
        <input
          name="punchline"
          value={joke.punchline}
          onChange={handleChange}
          placeholder="Punchline"
        />
        <input
          name="type"
          value={joke.type}
          onChange={handleChange}
          placeholder="Kategorie"
        />
        <button type="submit">Witz aktualisieren</button>
        <button type="button" onClick={() => navigate("/myjokes")}>
          Abbrechen
        </button>
      </form>
    </div>
  );
}

export default EditJoke;
