function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Division by zero";
  }
  return a / b;
}

function calculate(a, b, operator) {
  let result;

  if (operator === "+") {
    result = add(a, b);
  }

  if (operator === "-") {
    result = subtract(a, b);
  }

  if (operator === "*") {
    result = multiply(a, b);
  }

  if (operator === "/") {
    result = divide(a, b);
  }

  return result;
}

let num1 = 10;
let num2 = 5;
let op = "+";

console.log("Result:", calculate(num1, num2, op));  


