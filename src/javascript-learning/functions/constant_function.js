//constant_function.js

// ! Pozor u konstantí funkce nemůžeme funkci volat před její deklarací, dostaname chybu: ReferenceError: Cannot access 'logTextWithParam' before initialization
//logTextWithParam("Používáme constant funkci");

const logTextWithParam = (textParameter) => {
  console.log("05.03.2025 09:14:25 [INFO] " + textParameter);
};

logTextWithParam("Používáme constant funkci");

/*
Vytvoř jednoduchou kalkulačku pomocí funkcí. Zvol function nebo constant function. Složka: src/exercise, název souboru: calculator.js
Vytvoř 4 funkce: add, subtract, multiply, divide
Funkce vypočítá početní operaci.
Funkce také zapíší výsledek do konzole ve formátu “a + b = vysledek”
Vytvoř volání:
add: 15+48
subtract: 98-41
multiply: 54*30
divide: 88/6
*/
