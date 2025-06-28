// Testfall: Use Case 2 – Witz erstellen
// Testet das Formular in AddJoke.jsx und ob addJoke() korrekt aufgerufen wird

import React from "react";

import { BrowserRouter } from "react-router-dom";
import { beforeEach, describe, expect, test, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import MyJokes from "../../Pages/MyJokes";

const mockJokes = [
  { id: 1, setup: "Setup 1", punchline: "Punchline 1", type: "Kategorie1" },
  { id: 2, setup: "Setup 2", punchline: "Punchline 2", type: "Kategorie2" },
];

const mockDelete = vi.fn();

describe("Use Case 1 & 4 – Benutzerwitze anzeigen und löschen", () => {
  beforeEach(() => {
    mockDelete.mockClear();
  });

  test("zeigt alle Benutzerwitze an", () => {
    render(
      <BrowserRouter>
        <MyJokes jokes={mockJokes} deleteJoke={mockDelete} />
      </BrowserRouter>
    );

    expect(screen.getByText("Setup 1")).toBeInTheDocument();
    expect(screen.getByText("Punchline 1")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Kategorie1"))
    ).toBeInTheDocument();

    expect(screen.getByText("Setup 2")).toBeInTheDocument();
    expect(screen.getByText("Punchline 2")).toBeInTheDocument();
    expect(
      screen.getByText((content) => content.includes("Kategorie2"))
    ).toBeInTheDocument();
  });

  test("zeigt Hinweis, wenn keine Witze vorhanden sind", () => {
    render(
      <BrowserRouter>
        <MyJokes jokes={[]} deleteJoke={mockDelete} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Keine Witze vorhanden/i)).toBeInTheDocument();
  });

  test("ruft deleteJoke auf, wenn Löschen-Button geklickt wird", () => {
    render(
      <BrowserRouter>
        <MyJokes jokes={mockJokes} deleteJoke={mockDelete} />
      </BrowserRouter>
    );

    const deleteButtons = screen.getAllByText("Löschen");
    fireEvent.click(deleteButtons[0]);

    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });
});
