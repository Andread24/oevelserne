// OPGAVE 3 m. forklaring

// Variabler
let rigtigtTal; // Gemmer det korrekte tal, som man skal gætte
let antalGæt = 0; // Holder styr på antallet af forsøg

// Funktion for at starte et nyt spil
function startNytSpil() {
  // Generer et tilfældigt tal mellem 0 og 10 (eksklusiv 11)
  rigtigtTal = Math.floor(Math.random() * 11);

  // Nulstiller antal gæt og skjuler eventuelle meddelelser
  antalGæt = 0;
  skjulMeddelelse();
}

// Funktion for at håndtere brugerens gæt
function gætTal() {
  // Hvis det er første gæt i et nyt spil, kaldes startNytSpil
  if (antalGæt === 0) {
    startNytSpil();
  }

  // Henter brugerens gæt fra input-feltet og konverterer det til et helt tal
  let brugerGæt = parseInt(document.querySelector("#tal").value);

  // Øger antal gæt med 1
  antalGæt++;

  // Hvis brugerens input ikke er et tal, viser den en advarsel
  if (isNaN(brugerGæt)) {
    visMeddelelse("Indtast venligst et gyldigt tal.");
  } else {
    // Gætte-logik
    if (brugerGæt === rigtigtTal) {
      visMeddelelse(`Tillykke! Du gættede det rigtige tal ${rigtigtTal} på ${antalGæt} forsøg.`);
    } else if (brugerGæt < rigtigtTal) {
      visMeddelelse("Dit gæt er for lavt. Prøv igen!");
    } else {
      visMeddelelse("Dit gæt er for højt. Prøv igen!");
    }
  }
}

// Funktion for at vise en meddelelse
function visMeddelelse(tekst) {
  document.querySelector("#meddelelse-tekst").textContent = tekst;
  document.querySelector("#meddelelse-container").style.display = "block";
}

// Funktion for at skjule meddelelser
function skjulMeddelelse() {
  document.querySelector("#meddelelse-container").style.display = "none";
}
