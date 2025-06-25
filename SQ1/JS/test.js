// test.js
// globale Variable counter
let counter = 42;

function clickButton() {
  document.getElementById("ausgabe").innerHTML = event.target.innerHTML;

  //mit console.log() kann ich in die Console in den Entwickler-Tools im Browser schreiben
  console.log("I've been clicked: " + event.target.innerHTML);
}

//Ereignisbehandlung initialisieren (nach der clickButton-Funktion)
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = clickButton;
}
