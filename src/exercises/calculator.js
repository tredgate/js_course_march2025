function add(a, b) {
  const result = a + b;
  console.log(`${a} + ${b} = ${result}`);
}

function subtract(a, b) {
  const result = a - b;
  console.log(`${a} - ${b} = ${result}`);
}

const multiply = (a, b) => {
  const result = a * b;
  console.log(`${a} * ${b} = ${result}`);
};

const divide = (a, b) => {
  const result = Math.round(a / b); // ? BONUS: Math.round <- zaokrouhlení na celá čísla
  console.log(`${a} / ${b} = ${result}`);
};

add(15, 48);
subtract(98, 41);
multiply(54, 30);
divide(88, 6);
