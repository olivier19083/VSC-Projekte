// Testfall: Use Case 6 – 404-Seite anzeigen
// Testet, ob die NotFound-Komponente die korrekten Texte und den Link zur Startseite anzeigt

import React from "react";

import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";

import NotFound from "../../Pages/NotFound";

describe("NotFound", () => {
  it("zeigt Überschrift, Nachricht und Link zur Startseite an", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    expect(screen.getByText("Seite nicht gefunden")).toBeInTheDocument();
    expect(
      screen.getByText("Die angeforderte Seite existiert nicht.")
    ).toBeInTheDocument();
    const homeLink = screen.getByRole("link", { name: /Zur Startseite/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink.getAttribute("href")).toBe("/");
  });
});
