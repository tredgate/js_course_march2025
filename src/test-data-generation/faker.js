//test-data-generation
//faker.js
import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.username({
  firstName,
  lastName,
});
const email = faker.internet.email({
  firstName,
  lastName,
  provider: "seznam.cz",
});

console.log(firstName);
console.log(lastName);
console.log(email);
console.log(username);

// * Přidání více uživatelů
let users = []; // ? vytvoření prázdného pole pro uživatele

for (let i = 0; i < 10; i++) {
  // ? Cyklus, který nám vygeneruje 10x uživatele a přidá ho do pole users[]
  const user = {
    // ? Vytvoření JS object, který v sobě má property uživatele
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.username(),
    email: faker.internet.exampleEmail(),
  };
  users.push(user);
}

console.log(users); // výpis všech uživatelů
console.log(users[0].username); // výpis konkrétního uživatele (1.)
