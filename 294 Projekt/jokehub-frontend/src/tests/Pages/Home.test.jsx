// Testfall: Use Case 5 – Witz suchen
// Testet, ob Witze gefiltert angezeigt werden, wenn ein Suchbegriff eingegeben wird

import React from "react";

import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import Home from "../../Pages/Home";

describe("Home", () => {
  const mockJokes = [
    {
      id: 1,
      setup: "Warum können Seeräuber den Kreis nicht berechnen?",
      punchline: "Weil sie Pi raten.",
      type: "Wortspiel",
    },
    {
      id: 2,
      setup: "Was macht ein Pirat am Computer?",
      punchline: "Er drückt die Enter-Taste.",
      type: "IT",
    },
    {
      id: 3,
      setup: "Warum war das Mathebuch traurig?",
      punchline: "Weil es zu viele Probleme hatte.",
      type: "Schule",
    },
  ];

  it("filtert die Witze basierend auf dem Suchbegriff", () => {
    render(
      <MemoryRouter>
        <Home initialJokes={mockJokes} />
      </MemoryRouter>
    );

    const searchInput = screen.getByPlaceholderText(/Suche/i);
    fireEvent.change(searchInput, { target: { value: "Pirat" } });

    expect(screen.getByText(/Was macht ein Pirat/i)).toBeInTheDocument();
    expect(
      screen.queryByText(/Warum war das Mathebuch traurig/i)
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/Warum können Seeräuber den Kreis/i)
    ).not.toBeInTheDocument();
  });
});
