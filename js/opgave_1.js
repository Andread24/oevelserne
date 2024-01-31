//  OPGAVE 1

// EventListener - lytter til klik på <main>-elementet
document.querySelector("main").addEventListener("click", (event) => {
  // Henter det element, der blev klikket på
  const clickedElement = event.target;

  // Tjekker om det klikkede element er et <img>-element (billede)
  if (clickedElement.tagName === "IMG") {
    // Kalder på funktionen "checkAlcohol" med billedets alt-attribut som argument
    checkAlcohol(clickedElement.alt);
  }
});

// Funktion til at tjekke alkoholindholdet baseret på "drinkType"
function checkAlcohol(drinkType) {
  // Konverterer drinkType til små bogstaver
  drinkType = drinkType.toLowerCase();

  // Tjek om drinkType indeholder "snaps" eller "tuborg"
  if (drinkType.includes("snaps") || drinkType.includes("tuborg")) {
    console.log("Indeholder alkohol");
    // Hvis ikke den indeholder "snaps" eller "tuborg" er den alkoholsfri
  } else {
    console.log("Alkoholfri");
  }
}
