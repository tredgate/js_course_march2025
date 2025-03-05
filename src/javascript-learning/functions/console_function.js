//console_function.js

function logText() {
  console.log("Programujeme v Javascriptu!");
  console.log("A jsme v tom dobří!");
}

logText();
logText();
logText();
logText();

logTextWithParam("JS je super!"); // ? Funkci můžeme definovat i za zavoláním. Její definice totiž není součástí běhu programu a volá se a hledá až ve chvíli, kdy ji zavoláme.

function logTextWithParam(textParameter) {
  console.log("05.03.2025 09:14:25 [INFO] " + textParameter);
}
