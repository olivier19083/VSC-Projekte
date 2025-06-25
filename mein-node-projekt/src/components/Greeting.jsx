// src/components/Greeting.jsx
import React from "react";

function Greeting({ name }) {
  if (!name) {
    return <div>Hallo Gast!</div>;
  }
  return <div>Hallo {name}!</div>;
}

export default Greeting;
