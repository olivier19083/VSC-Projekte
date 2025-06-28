//Wichtig, Notiz an mich selbst!
//Ich nuttze React Router für das Routing (Navigation zw. Seiten)
//Es gibt 4 Seiten: Startseite, Meine Witze, Witz hinzufügen und 404 ODER MEHR ??????????
//Aktuell nur Dummy-Komponenten mit Überschriften, die nach und nach ausgebaut werden? Nötig?

//userJokes ist der State, in dem die vom Nutzer erstellten Witze gehalten werden.

//Funktionen zum Hinzufügen, Bearbeiten und Löschen verändern diesen State.

//Diese Funktionen und Daten werden via Props an die jeweiligen Seiten übergeben.

//Wir benutzen react-router-dom für die Navigation.

import React, { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navigation from "./components/Navigation";
import AddJoke from "./Pages/AddJoke";
import EditJoke from "./Pages/EditJoke";
import Home from "./Pages/Home";
import MyJokes from "./Pages/MyJokes";
import NotFound from "./Pages/NotFound";

function App() {
  const [userJokes, setUserJokes] = useState([]);

  const addJoke = (joke) => {
    setUserJokes((prev) => [...prev, { ...joke, id: Date.now() }]);
  };

  const editJoke = (id, updatedJoke) => {
    setUserJokes((prev) =>
      prev.map((joke) => (joke.id === id ? { ...joke, ...updatedJoke } : joke))
    );
  };

  const deleteJoke = (id) => {
    setUserJokes((prev) => prev.filter((joke) => joke.id !== id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddJoke addJoke={addJoke} />} />
        <Route
          path="/edit/:id"
          element={<EditJoke userJokes={userJokes} editJoke={editJoke} />}
        />
        <Route
          path="/myjokes"
          element={<MyJokes userJokes={userJokes} deleteJoke={deleteJoke} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
