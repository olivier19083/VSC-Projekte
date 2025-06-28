import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Seite nicht gefunden</h2>
      <p>Die angeforderte Seite existiert nicht.</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}

export default NotFound;
