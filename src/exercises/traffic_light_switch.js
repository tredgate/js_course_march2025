const startSignal = "green";
const switchLight = "yellow";
let finalLight;

switch (switchLight) {
  case "green":
    finalLight = "green";
    break;
  case "red":
    finalLight = "red";
    break;
  case "yellow":
    finalLight = "yellow";
    break;
  default:
    throw new Error("ERROR: Unknown light"); // ? Throw vyhazuje exception, ukončuje celý program
}

console.log(`Traffic light changed from '${startSignal}' to '${finalLight}'`);
