// Testfall: Use Case 1 – Witz anzeigen
// Testet, ob ein zufälliger Witz aus der API geladen und angezeigt wird

import { beforeEach, describe, expect, it, vi } from "vitest";

import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ShowJokes from "../../Pages/ShowJokes";

// Mock für fetch API mit vi.stubGlobal
const mockFetch = vi.fn();
vi.stubGlobal("fetch", mockFetch);

describe("ShowJokes - UC1: Witz anzeigen", () => {
  beforeEach(() => {
    // Reset alle Mocks vor jedem Test
    vi.clearAllMocks();
  });

  it("sollte einen Witz erfolgreich laden und anzeigen", async () => {
    // Mock API Response
    const mockJoke =
      "Chuck Norris doesn't wear a watch. He decides what time it is.";
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: mockJoke }),
    });

    render(<ShowJokes />);

    // Prüfe ob Ladeindikator angezeigt wird
    expect(screen.getByText("Lade Witz...")).toBeInTheDocument();

    // Warte bis der Witz geladen ist
    await waitFor(() => {
      expect(screen.getByText(mockJoke)).toBeInTheDocument();
    });

    // Prüfe ob der "Neuen Witz laden" Button da ist
    expect(screen.getByText("Neuen Witz laden")).toBeInTheDocument();

    // Prüfe ob API korrekt aufgerufen wurde
    expect(fetch).toHaveBeenCalledWith(
      "https://api.chucknorris.io/jokes/random"
    );
  });

  it("sollte Fehler korrekt behandeln", async () => {
    // Mock API Fehler
    fetch.mockRejectedValueOnce(new Error("API Fehler"));

    render(<ShowJokes />);

    // Warte bis Fehler angezeigt wird
    await waitFor(() => {
      expect(screen.getByText(/Fehler:/)).toBeInTheDocument();
    });

    // Prüfe ob "Erneut versuchen" Button da ist
    expect(screen.getByText("Erneut versuchen")).toBeInTheDocument();
  });

  it("sollte neuen Witz laden wenn Button geklickt wird", async () => {
    // Erster Mock für initialen Load
    const firstJoke = "First joke";
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: firstJoke }),
    });

    render(<ShowJokes />);

    // Warte bis erster Witz geladen ist
    await waitFor(() => {
      expect(screen.getByText(firstJoke)).toBeInTheDocument();
    });

    // Mock für zweiten API Call
    const secondJoke = "Second joke";
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ value: secondJoke }),
    });

    // Klicke "Neuen Witz laden" Button
    const newJokeButton = screen.getByText("Neuen Witz laden");
    fireEvent.click(newJokeButton);

    // Warte bis zweiter Witz geladen ist
    await waitFor(() => {
      expect(screen.getByText(secondJoke)).toBeInTheDocument();
    });

    // Prüfe ob fetch zweimal aufgerufen wurde
    expect(fetch).toHaveBeenCalledTimes(2);
  });

  it("sollte Button während Loading deaktivieren", async () => {
    // Mock langsame API Response
    fetch.mockImplementationOnce(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => ({ value: "Test joke" }),
              }),
            100
          )
        )
    );

    render(<ShowJokes />);

    // Prüfe ob Button während Loading deaktiviert ist
    const button = screen.getByText("Lädt...");
    expect(button).toBeDisabled();

    // Warte bis Loading fertig ist
    await waitFor(() => {
      expect(screen.getByText("Neuen Witz laden")).toBeInTheDocument();
    });
  });
});
