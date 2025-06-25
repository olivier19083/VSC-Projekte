console.log("--- Übung 1.2: Einkaufsliste bearbeiten ---");
// Wir nehmen die einkaufsliste aus Übung 1.1 weiter:
// let einkaufsliste = ["Milch", "Brot", "Äpfel", "Käse"]; // Stand Ende 1.1

// 1. Du hast bemerkt, dass du "Milch" schon zu Hause hast. Entferne den ersten Artikel von der einkaufsliste.
einkaufsliste.shift();
console.log("1. Nach Entfernen von 'Milch':", einkaufsliste);

// 2. Gib die Liste erneut aus. (Schon in 1. passiert)

// 3. "Käse" ist ausverkauft. Entferne den letzten Artikel von der Liste.
einkaufsliste.pop();
console.log("3. Nach Entfernen von 'Käse':", einkaufsliste);

// 4. Gib die Liste erneut aus. (Schon in 3. passiert)

// 5. Füge stattdessen "Wurst" und "Eier" am Ende der Liste hinzu.
// Variante A: Einzeln
// einkaufsliste.push("Wurst");
// einkaufsliste.push("Eier");
// Variante B: Mehrere mit einem Aufruf
einkaufsliste.push("Wurst", "Eier");
console.log("5. Nach Hinzufügen von 'Wurst' und 'Eier':", einkaufsliste);

// 6. Gib die Liste erneut aus. (Schon in 5. passiert)

// 7. Die "Äpfel" sollen durch "Birnen" ersetzt werden. Finde den Index von "Äpfel" und ersetze das Element.
let indexApfel = einkaufsliste.indexOf("Äpfel");
if (indexApfel !== -1) {
  // Sicherstellen, dass "Äpfel" gefunden wurde
  einkaufsliste[indexApfel] = "Birnen";
}
console.log("7. Nach Ersetzen von 'Äpfel' durch 'Birnen':", einkaufsliste);

// 8. Gib die finale Liste aus.
console.log("8. Finale Einkaufsliste:", einkaufsliste);
console.log("\n");
