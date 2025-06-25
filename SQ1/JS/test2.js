// test2.js

// Diese Datei wird NACH test.js geladen.
// Die von test.js im globalen Scope deklarierte Variable 'counter' ist hier zugänglich.

// Zusammengefasst:
// Verändert nichts, sondern beobachtet nur den Zustand der Variable counter.
// Dient als eine Art Debug-/Monitoring-Datei.
// Sie prüft: Hat sich counter verändert? (z. B. durch einen Klick zwischenzeitlich)
// test2.js: Liest und protokolliert den aktuellen Wert von counter.

console.log("test2.js geladen.");

// Zugriff auf die globale Variable 'counter' von test.js
// Wir nutzen setTimeout, um den Wert NACH dem ersten Klick (falls einer passiert ist) zu zeigen.
// Ansonsten wurde es nur den Initialwert von 42 zeigen, sobald test2.js geladen ist.
// Du kannst das setTimeout entfernen, um zu sehen, dass der Wert 42 direkt beim Laden verfugbar ist.

console.log("Wert von counter aus test2.js (nach 0 Sekunden): " + counter);
setTimeout(function () {
  console.log("Wert von counter aus test2.js (nach 2 Sekunden): " + counter);
}, 2000); // Warten 2 Sekunden

// Du könntest auch direkt beim Laden zugreifen:
// console.log("Initialer Wert von counter aus test2.js (direkt beim Laden): " + counter);
