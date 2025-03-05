// car_blueprint.js
export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.wheels = 4;
    this.carName = carName;
    this.addDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    console.log("Auto je \"Připravené\" a 'Vhodné do provozu'"); // ? znak \ znamená tzv. escape sekvenci. Můžeme takto vypisovat speciální znaky, například uvozovky " do stringu a nebo mají další účely jako je například formátování kódu: \n = nový řádek, \t horizontální tabulátor
  }

  logCarProperties() {
    this.addDivider();
    console.log(
      `Informace o autě "${this.carName}":\n\tbarva: ${this.color},\n\tmotor: ${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
  }

  addDivider() {
    console.log("-----------------------------");
  }

  repaint(color) {
    this.addDivider();
    // * Alternativní přístup (správnější)
    // const oldColor = this.color; // ? Ukládám aktuální barvu do proměnné, abych ji poté mohl použít v logu
    // this.color = color;
    // console.log(
    //   `Auto "${this.carName}" bylo přebarveno z ${this.oldColor} na ${color}`
    // );

    console.log(
      `Auto "${this.carName}" bylo přebarveno z ${this.color} na ${color}`
    ); // ? Vypsat zprávu před změnou musíme kvůli tomu, že pokud bychom log s this.color zavolali až po příkazu na změnu, this.color už bude změněný a tímpádem se nám výpiše špatná informace.
    this.color = color;
  }

  getColor() {
    return this.color;
  }
}
