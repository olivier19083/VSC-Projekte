import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Startseite</Link>
        </li>
        <li>
          <Link to="/add">Witz hinzufügen</Link>
        </li>
        <li>
          <Link to="/myjokes">Meine Witze</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
