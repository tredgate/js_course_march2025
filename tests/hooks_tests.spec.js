//hooks_tests.spec.js
import { expect } from "chai";
import { Calculator } from "../src/calculator/calculator.js";

describe("Testy Háčků (hooks)", () => {
  let calc;

  beforeEach(() => {
    console.log("Běžím před každým testem");
    calc = new Calculator();
  });

  it("add(1, 5) = 6", () => {
    const result = calc.add(1, 5);
    expect(result).to.equal(6);
  });

  it("subtract(1, 1) = 0", () => {
    const result = calc.subtract(1, 1);
    expect(result).to.eq(0);
  });

  it("multiply(5, 8) = 40", () => {
    const result = calc.multiply(5, 8);
    expect(result).to.eql(40);
  });

  it("divide(10, 2) = 5", () => {
    const result = calc.divide(10, 2);
    expect(result).to.equal(5);
  });
});
