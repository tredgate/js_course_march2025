//switch_calculator.js
// * Program kalkulačky, který pracuje se 2 čísly (a, b), a na základě zvolené operace nám provede výpočet. Pro vybrání operace použijeme switch

const operation = "mocnění"; // ? Možnosti: divide, add, multiply, subtract
const a = 10;
const b = 5;
let result;

switch (operation) {
  case "add":
    result = a + b;
    break;
  case "subtract":
    result = a - b;
    break;
  case "multiply":
    result = a * b;
    break;
  case "divide":
    result = a / b;
    break;
  default:
    result = NaN;
    console.error(
      "Nepodporovaná operace. Je možné využít pouze: divide, add, multiply, subtract"
    );
}

console.log(`Výsledek početní operace: "${operation}" je: ${result}`);

/*
* Struktura switche převedeného do if, else if, else podmínky
if (operation == "divide") {
} else if (operation == "add") {
} else if (operation == "multiply") {
} else if (operation == "subtract") {
} else { }
*/

/*
Vytvořte nový program ve složce src/exercises, program pojmenujte: traffic_light_switch.js
Vytvořte switch switchTrafficLight, která simuluje chování semaforu.
Switch bude přijímat jeden parametr: budoucí stav semaforu ('red', 'yellow', 'green').
Podle budoucího stavu switche rozhodne a nastaví barvu semaforu (proměnná: resultLight):
green: změní na 'green'
yellow: změní na 'yellow'
red: změní na 'red'
Pokud je vstup neplatný, vrátí 'Neznámý stav'.
Výstup bude v console.log s popisem stavu.

*/
