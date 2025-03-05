//array.js

const cities = ["Praha", "Brno", "České Budějovice", "Beroun"];

console.log("Města: " + cities);
console.log("2. město: " + cities[2]);

// ? For na procyklení array
for (let i = 0; i < cities.length; i++) {
  console.log(`${i + 1}. město: ${cities[i]}`);
}
