import React from "react";

import { MemoryRouter } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import MyJokes from "../../Pages/MyJokes";

describe("MyJokes – Witz löschen", () => {
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
  ];

  it("ruft deleteJoke auf, wenn Löschen-Button geklickt wird", () => {
    const mockDelete = vi.fn();

    render(
      <MemoryRouter>
        <MyJokes userJokes={mockJokes} deleteJoke={mockDelete} />
      </MemoryRouter>
    );

    // Simuliere Klick auf ersten Löschen-Button
    const deleteButtons = screen.getAllByText(/Löschen/i);
    fireEvent.click(deleteButtons[0]);

    // Erwartung: deleteJoke wurde mit id 1 aufgerufen
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
