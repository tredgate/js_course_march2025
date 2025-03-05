//variables.js
let firstName = "Petr"; // ? deklarace proměnné: let firstName, inicializace proměnné let firstName = "Petr"
// ! špatně: "Petr" = let firstName
let lastName; // ? Pouze deklarace proměnné, nemá žádnou hodnotu prozatím.
lastName = "Fifka"; // ? Inicializace proměnné

console.log(firstName); // ? vypíše hodnotu proměnné firstName => Petr
console.log("firstName"); // ? vypíše do konzole: firstName
// console.log(FirstName); // ! Nebude fungovat, JS je citlivý na velikost písmen (case-sensitive)

console.log(firstName);
console.log(firstName);

firstName = "Alžběta"; // ? měníme hodnotu proměnné firstName

console.log(firstName);
console.log(firstName + " " + lastName); // ? pokud nepřídáme mezeru, výsledek by byl: AlžbětaFifka

firstName = "Pepa";
console.log(firstName);

//let firstName; // ? Nelze, proměnná je již definovaná: Cannot redeclare block-scoped variable 'firstName'.ts(2451)

// ! takto ne, vždy používejte rozumné názvy.
let text1; // ! Mohlo by být například username
let text2;
let text3;

// ! Takto taky ne, používejte krátké názvy:
let usernameConsumerForUsingInTredgateEshopAndCourseFormsItWillBeChanged; // ! lepší: username
// let škola; // ! Může způsobit problémy, může způsobit a nečitelnost pro lidi, kteří nemluví česky

// ? Proměnnou let deklarujeme pro blok kódu {}
let outsideLet = "Test proměnné mimo blok";
{
  let blockLet = "Existuji jen v bloku";
  console.log(outsideLet); // ? Proměnná vytvořená mimo blok, do něj vstupuje a můžeme ji použít
}
// console.log(blockLet); // ! Není možné, blockLet existuje pouze v bloku {}, mimo něj dostaneme chybu: not defined

// ? Konstanta const nelze měnit a musíme ji naplnit (inicializovat) při vytváření
const city = "Praha";
console.log(city);
city = "Brno"; // ! nelze reinicializovat proměnnou: TypeError: Assignment to constant variable.
// const country; // ! nelze, konstantu musíme naplnit při deklaraci: 'const' declarations must be initialized.ts(1155)
// country = "Čechy";
