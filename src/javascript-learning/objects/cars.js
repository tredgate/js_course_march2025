//cars.js
import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel Auto"
); // ? slovo new => vytvoř nový objekt, CarBlueprint => název třídy (šablony) vytvářeného objekty ("červená"...) => volání constructoru a předávání argumentů

dieselCar.logCarProperties();

const yellowCar = new CarBlueprint("Žlutá", "1.0 TSI", "Benzín", "Žluťáček");

yellowCar.logCarProperties();
dieselCar.logCarProperties();

const lightningCar = new CarBlueprint(
  "Modrá",
  "EV 160kW",
  "Elektřina",
  "Blesk"
);
lightningCar.logCarProperties();

const duplicatedCar = dieselCar; // ? duplicatedCar i dieselCar jsou stejný objekt! Nové objekty musím vytvářet vždy pomocí klíčového slova new a názvu třídy.

lightningCar.repaint("Zelená");
lightningCar.logCarProperties();

duplicatedCar.repaint("Šedá");
dieselCar.logCarProperties(); // ? Jakou barvu bude mít diesel? Šedá = palec nahoru, Červená = palec dolů

const yellowCarColor = yellowCar.getColor();
console.log("Barva žluťáčka" + yellowCarColor);

console.log("Barva žluťáčka" + yellowCar.getColor());

const secondYellowCar = new CarBlueprint(
  yellowCar.getColor(),
  "nějaký",
  "benzín",
  "Žluťáček Druhý"
);
