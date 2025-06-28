// Testfall: Use Case 3 – Witz bearbeiten
// Testet das Formular in EditJoke.jsx und ob editJoke() korrekt funktioniert

/* eslint-env jest */

import React from "react";

import { beforeEach, describe, expect, test, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import EditJoke from "../../Pages/EditJoke";

const mockNavigate = vi.fn();

let mockId = "1";

vi.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
  useParams: () => ({ id: mockId }),
}));

describe("Use Case 3 – Witz bearbeiten", () => {
  const userJokes = [
    {
      id: 1,
      setup: "Alter Setup",
      punchline: "Alte Punchline",
      type: "Kategorie1",
    },
    {
      id: 2,
      setup: "Anderer Setup",
      punchline: "Andere Punchline",
      type: "Kategorie2",
    },
  ];

  const editJokeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    mockId = "1"; // Default id für jeden Test zurücksetzen
  });

  test("Formular zeigt vorhandenen Witz, ändert ihn und ruft editJoke auf", () => {
    render(<EditJoke userJokes={userJokes} editJoke={editJokeMock} />);

    expect(screen.getByPlaceholderText("Setup").value).toBe("Alter Setup");
    expect(screen.getByPlaceholderText("Punchline").value).toBe(
      "Alte Punchline"
    );
    expect(screen.getByPlaceholderText("Kategorie").value).toBe("Kategorie1");

    fireEvent.change(screen.getByPlaceholderText("Setup"), {
      target: { value: "Neuer Setup" },
    });
    fireEvent.change(screen.getByPlaceholderText("Punchline"), {
      target: { value: "Neue Punchline" },
    });
    fireEvent.change(screen.getByPlaceholderText("Kategorie"), {
      target: { value: "Neue Kategorie" },
    });

    fireEvent.click(screen.getByText("Witz aktualisieren"));

    expect(editJokeMock).toHaveBeenCalledWith(1, {
      id: 1,
      setup: "Neuer Setup",
      punchline: "Neue Punchline",
      type: "Neue Kategorie",
    });

    expect(mockNavigate).toHaveBeenCalledWith("/myjokes");
  });

  test("Fehleranzeige wenn kein Witz gefunden wird", () => {
    mockId = "3"; // Witz mit id=3 existiert nicht

    render(<EditJoke userJokes={userJokes} editJoke={editJokeMock} />);

    expect(screen.getByText("Witz nicht gefunden.")).toBeInTheDocument();
  });

  test("Fehlermeldung bei leeren Feldern", () => {
    render(<EditJoke userJokes={userJokes} editJoke={editJokeMock} />);

    fireEvent.change(screen.getByPlaceholderText("Setup"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Punchline"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByPlaceholderText("Kategorie"), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByText("Witz aktualisieren"));

    expect(screen.getByText("Bitte alle Felder ausfüllen")).toBeInTheDocument();
    expect(editJokeMock).not.toHaveBeenCalled();
    expect(mockNavigate).not.toHaveBeenCalled();
  });
});
