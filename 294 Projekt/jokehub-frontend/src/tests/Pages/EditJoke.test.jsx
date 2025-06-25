import React from "react";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import EditJoke from "../../Pages/EditJoke";

describe("EditJoke", () => {
  const existingJoke = {
    id: 1,
    setup: "Was macht ein Pirat am Computer?",
    punchline: "Er drückt die Enter-Taste.",
    type: "IT",
  };

  it("zeigt bestehende Witzdaten im Formular an und aktualisiert den Witz", () => {
    const mockEditJoke = vi.fn();

    // Wir müssen den Router so aufbauen, dass der useParams id=1 hat
    render(
      <MemoryRouter initialEntries={["/edit/1"]}>
        <Routes>
          <Route
            path="/edit/:id"
            element={
              <EditJoke userJokes={[existingJoke]} editJoke={mockEditJoke} />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByDisplayValue(/Was macht ein Pirat am Computer/i)
    ).toBeInTheDocument();
    expect(
      screen.getByDisplayValue(/Er drückt die Enter-Taste./i)
    ).toBeInTheDocument();
    expect(screen.getByDisplayValue(/IT/i)).toBeInTheDocument();

    fireEvent.change(screen.getByPlaceholderText(/Setup/i), {
      target: { value: "Was macht ein Pirat mit dem Internet?" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    expect(mockEditJoke).toHaveBeenCalledWith(1, {
      setup: "Was macht ein Pirat mit dem Internet?",
      punchline: "Er drückt die Enter-Taste.",
      type: "IT",
    });
  });

  it("zeigt Warnung, wenn Felder leer sind", () => {
    const mockEditJoke = vi.fn();
    const alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});

    render(
      <MemoryRouter initialEntries={["/edit/1"]}>
        <Routes>
          <Route
            path="/edit/:id"
            element={
              <EditJoke userJokes={[existingJoke]} editJoke={mockEditJoke} />
            }
          />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Setup/i), {
      target: { value: "" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    expect(mockEditJoke).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Bitte alle Felder ausfüllen!");

    alertMock.mockRestore();
  });
});
