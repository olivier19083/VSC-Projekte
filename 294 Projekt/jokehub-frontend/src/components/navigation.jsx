// src/components/navigation.jsx
import React from "react";

import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Link zur Startseite */}
        </li>
        <li>
          <Link to="/add-joke">Add Joke</Link>
        </li>
        <li>
          <Link to="/my-jokes">My Jokes</Link>
        </li>
        {/* weitere Links, falls vorhanden */}
      </ul>
    </nav>
  );
}

export default Navigation;
