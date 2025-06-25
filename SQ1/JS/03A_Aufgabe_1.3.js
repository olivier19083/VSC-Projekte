// INFOS ZU SPLICE
//array.splice(2, 1); // entfernt 1 Element an Index 2
//array.splice(2, 0, "neu"); // fügt "neu" an Index 2 ein, löscht nichts
//array.splice(2, 1, "neu"); // ersetzt Element an Index 2 durch "neu"

// 1. Erstelle eine To-Do-Liste.
let todos = ["Hausaufgaben machen", "Zimmer aufräumen", "Sport treiben"];
console.log("1. Initiale To-Do-Liste:", todos);

// 2. Nach "Zimmer aufräumen" möchtest du "Freunde anrufen" einfügen.
// Wenn man weiß, es ist das zweite Element (Index 1), dann einfügen an Index 2:
todos.splice(2, 0, "Freunde anrufen");
console.log("2. Nach Einfügen von 'Freunde anrufen':", todos);

// 3. Gib die Liste aus. (Schon in 2. passiert)

// 4. "Sport treiben" entfällt heute. Entferne es mit splice().
let indexSport = todos.indexOf("Sport treiben");
if (indexSport !== -1) {
  todos.splice(indexSport, 1);
}
console.log("4. Nach Entfernen von 'Sport treiben':", todos);
