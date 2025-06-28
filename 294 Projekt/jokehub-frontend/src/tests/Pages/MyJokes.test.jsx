// Testfall: Use Case 1 & 4 – Benutzerwitze anzeigen und löschen
// UC1: Testet, ob alle Benutzerwitze korrekt angezeigt werden
// UC4: Testet, ob deleteJoke() aufgerufen wird, wenn der Löschen-Button geklickt wird

import React from "react";

import { BrowserRouter } from "react-router-dom"; // Weil <Link> verwendet wird
import { beforeEach, describe, expect, test, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import MyJokes from "../../Pages/MyJokes";

describe("Use Case 1 & 4 – Benutzerwitze anzeigen und löschen", () => {
  const userJokes = [
    {
      id: 1,
      setup: "Setup 1",
      punchline: "Punchline 1",
      type: "Kategorie1",
    },
    {
      id: 2,
      setup: "Setup 2",
      punchline: "Punchline 2",
      type: "Kategorie2",
    },
  ];

  const deleteJokeMock = vi.fn();

  beforeEach(() => {
    deleteJokeMock.mockClear();
  });

  test("zeigt alle Benutzerwitze an", () => {
    render(
      <BrowserRouter>
        <MyJokes userJokes={userJokes} deleteJoke={deleteJokeMock} />
      </BrowserRouter>
    );

    expect(screen.getByText("Meine Witze")).toBeInTheDocument();
    expect(screen.getByText("Setup 1")).toBeInTheDocument();
    expect(screen.getByText(/Punchline 1/)).toBeInTheDocument(); // flexibler Matcher
    expect(screen.getByText("Kategorie1")).toBeInTheDocument();
    expect(screen.getByText("Setup 2")).toBeInTheDocument();
  });

  test("zeigt Hinweis, wenn keine Witze vorhanden sind", () => {
    render(
      <BrowserRouter>
        <MyJokes userJokes={[]} deleteJoke={deleteJokeMock} />
      </BrowserRouter>
    );

    expect(screen.getByText("Keine Witze vorhanden.")).toBeInTheDocument();
    expect(
      screen.getByText("Füge einen neuen Witz hinzu.")
    ).toBeInTheDocument();
  });

  test("ruft deleteJoke auf, wenn Löschen-Button geklickt wird", () => {
    render(
      <BrowserRouter>
        <MyJokes userJokes={userJokes} deleteJoke={deleteJokeMock} />
      </BrowserRouter>
    );

    const deleteButtons = screen.getAllByText("Löschen");
    expect(deleteButtons.length).toBe(2);

    fireEvent.click(deleteButtons[0]);
    expect(deleteJokeMock).toHaveBeenCalledTimes(1);
    expect(deleteJokeMock).toHaveBeenCalledWith(1);
  });
});
