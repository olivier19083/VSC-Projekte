import React from "react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import EditJoke from "../../Pages/EditJoke";

describe("EditJoke", () => {
  const existingJokes = [
    {
      id: 1,
      setup: "Was macht ein Pirat am Computer?",
      punchline: "Er drückt die Enter-Taste.",
      type: "IT",
    },
  ];

  it("zeigt bestehende Witzdaten im Formular an und aktualisiert den Witz", () => {
    const mockEditJoke = vi.fn();

    render(
      <MemoryRouter initialEntries={["/editjoke/1"]}>
        <Routes>
          <Route
            path="/editjoke/:id"
            element={
              <EditJoke userJokes={existingJokes} editJoke={mockEditJoke} />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    // Prüfe vorhandene Werte
    expect(
      screen.getByDisplayValue(/Was macht ein Pirat am Computer/i)
    ).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(/Er drückt die Enter-Taste./i)
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue(/IT/i)).toBeInTheDocument();

    // Ändere Setup
    fireEvent.change(screen.getByPlaceholderText(/Setup/i), {
      target: { value: "Was macht ein Pirat mit dem Internet?" },
    });

    // Klick auf Button "Speichern"
    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    // Erwartet: editJoke mit id und geändertem Objekt
    expect(mockEditJoke).toHaveBeenCalledWith(1, {
      setup: "Was macht ein Pirat mit dem Internet?",
      punchline: "Er drückt die Enter-Taste.",
      type: "IT",
    });
  });

  it("zeigt Warnung, wenn Felder leer sind", () => {
    const mockEditJoke = vi.fn();
    vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/editjoke/1"]}>
        <Routes>
          <Route
            path="/editjoke/:id"
            element={
              <EditJoke userJokes={existingJokes} editJoke={mockEditJoke} />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    // Leere das Setup-Feld
    fireEvent.change(screen.getByPlaceholderText(/Setup/i), {
      target: { value: "" },
    });

    // Klick auf Button "Speichern"
    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    expect(mockEditJoke).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Bitte alle Felder ausfüllen!");
  });
});
