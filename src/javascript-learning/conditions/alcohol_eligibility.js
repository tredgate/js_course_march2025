// alcohol_eligibility.js
// conditions

const actualAge = -1;
const drinkingLimitAge = 18;
const fullName = "Alžběta Nová";

if (actualAge >= drinkingLimitAge) {
  //console.log(fullName + " už může pít alkohol.");
  // ? `${variable} text` <= template literal zápis JS kódu + textu
  console.log(`${fullName} už může pít alkohol`); // ? zpětný apostrof napíšeme na Windows pravý ALT + ý, na ENG klávesnici je to klávesa nad TAB nalevo od 1; $ napíšeme na CZ klávesnici: pravý ALT + ů, na anglické je to SHIFT + 4 (nad písmeny)
} else if (actualAge >= 0) {
  console.log(
    `${fullName} nemůže pít alkohol, chybí mu ještě ${
      drinkingLimitAge - actualAge
    } let.`
  );
} else {
  console.error("CHYBA: věk musí být číslo a větší než 0!");
}

/*
Cvičení (zde bude časovač: ⌛10:00):
Vytvořte program, který bude vyhodnocovat, jestli má student dostatek bodů k úspěšnému ukončení studia.
Program ulož do složky: src/exercises
Název souboru: student_absolvent.js

Vstupy: 
Počet bodů studenta.
Jméno studenta.

Hodnocení:
Minimální počet bodů pro úspěch: 75

Výsledek zaloguj srozumitelně do konzole s jménem.


*/
