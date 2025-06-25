// 1. Erstelle ein leeres Array namens filmsammlung.
let filmsammlung = [];

// 2. Definiere zwei separate Film-Objekte.
let film1 = {
  titel: "Inception",
  regisseur: "Christopher Nolan",
  erscheinungsjahr: 2010,
  bewertung: 9
};

let film2 = {
  titel: "Das Leben ist schön",
  regisseur: "Roberto Benigni",
  erscheinungsjahr: 1997,
  bewertung: 10
};

// 3. Füge diese beiden Film-Objekte zu deinem filmsammlung-Array hinzu.
filmsammlung.push(film1);
filmsammlung.push(film2);

// 4. Gib die gesamte filmsammlung in der Konsole aus.
console.log(filmsammlung);

// 5. Gib den Titel des ersten Films in der Sammlung aus.
console.log(filmsammlung[0].titel);

// 6. Gib die Bewertung des zweiten Films in der Sammlung aus.
console.log(filmsammlung[1].bewertung);

// 7. (Fortgeschritten, falls Schleifen bekannt) Gib für jeden Film in der Sammlung einen Satz aus.
console.log("7. Detailausgabe für jeden Film:");

// Variante A: for...of Schleife
for (let film of filmsammlung) {
  console.log(`Der Film '${film.titel}' von ${film.regisseur} hat die Bewertung ${film.bewertung}.`);
}

// Variante B: forEach Schleife
// filmsammlung.forEach(function(film) {
//   console.log(`Der Film '${film.titel}' von ${film.regisseur} hat die Bewertung ${film.bewertung}.`);
// });

// Variante B2: forEach Schleife
// filmsammlung.forEach((film) => {
//   console.log(`Der Film '${film.titel}' von ${film.regisseur} hat die Bewertung ${film.bewertung}.`);
// });

// Variante B3: forEach Schleife
// filmsammlung.forEach((film) => console.log(`Der Film '${film.titel}' von ${film.regisseur} hat die Bewertung ${film.bewertung}.`));

// Variante C: Klassische for-Schleife
// for (let i = 0; i < filmsammlung.length; i++) {
//   let film = filmsammlung[i];
//   console.log(`Der Film '${film.titel}' von ${film.regisseur} hat die Bewertung ${film.bewertung}.`);
// }