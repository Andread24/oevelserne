//  OPGAVE 2

document.addEventListener("DOMContentLoaded", function () {
  // Hent det aktuelle timetal
  let aktueltTimetal = new Date().getHours();

  // Definere hilsen baseret på tidspunktet på dagen
  let hilsen;

  if (aktueltTimetal >= 5 && aktueltTimetal < 10) {
    hilsen = "Godmorgen";
  } else if (aktueltTimetal >= 10 && aktueltTimetal < 18) {
    hilsen = "Goddag";
  } else if (aktueltTimetal >= 18 && aktueltTimetal < 24) {
    hilsen = "Godaften";
  } else {
    hilsen = "Godnat";
  }

  // Udskriv hilsen i konsollen
  console.log(hilsen);
});
