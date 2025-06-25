// Testfall: Use Case 2 – Witz erstellen
// Testet das Formular in AddJoke.jsx und ob addJoke() korrekt aufgerufen wird

import React from "react";

import { MemoryRouter } from "react-router-dom";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";

import AddJoke from "../../Pages/AddJoke";

describe("AddJoke", () => {
  let alertMock;

  beforeEach(() => {
    alertMock = vi.spyOn(window, "alert").mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockRestore();
  });

  it("fügt neuen Witz hinzu, wenn alle Felder ausgefüllt sind", () => {
    const mockAddJoke = vi.fn();

    render(
      <MemoryRouter>
        <AddJoke addJoke={mockAddJoke} />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/Setup/i), {
      target: { value: "Test Setup" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Punchline/i), {
      target: { value: "Test Punchline" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Kategorie/i), {
      target: { value: "Test Kategorie" },
    });

    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    expect(mockAddJoke).toHaveBeenCalledWith({
      setup: "Test Setup",
      punchline: "Test Punchline",
      type: "Test Kategorie",
    });
  });

  it("zeigt Warnung, wenn Felder leer sind", () => {
    const mockAddJoke = vi.fn();

    render(
      <MemoryRouter>
        <AddJoke addJoke={mockAddJoke} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole("button", { name: /Speichern/i }));

    expect(mockAddJoke).not.toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Bitte alle Felder ausfüllen!");
  });
});
