import React from "react";

import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Game from "./pages/Game";
import Home from "./pages/Home";
import Impressum from "./pages/Impressum";
import PageNotFound from "./pages/PageNotFound";
import QuestionManager from "./pages/QuestionManager"; // Wichtig: Import nicht vergessen
import Rules from "./pages/Rules";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Game />} />
        <Route path="/admin" element={<QuestionManager />} />
        <Route path="/regeln" element={<Rules />} />
        <Route path="/blabli" element={<Impressum />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
