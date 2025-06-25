// src/components/Counter.jsx
import React, { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Aktueller Zähler: {count}</p>
      <button onClick={() => setCount(count + 1)}>Erhöhen</button>
    </div>
  );
}
