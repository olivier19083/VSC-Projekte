import React from "react";

import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h2>Seite nicht gefunden (404)</h2>
      <p>Die gesuchte Seite existiert nicht.</p>
      <Link to="/">Zur Startseite</Link>
    </div>
  );
}

export default NotFound;
