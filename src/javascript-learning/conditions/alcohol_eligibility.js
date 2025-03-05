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
