console.log("Portfolio-Webseite geladen.");

const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log("Button wurde geklickt.");
  });
});