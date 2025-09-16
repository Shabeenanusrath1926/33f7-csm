function calculate(num1, num2, operator) {
  let result;

  if (operator === "+") {
    result = num1 + num2;
  }

  if (operator === "-") {
    result = num1 - num2;
  }

  if (operator === "*") {
    result = num1 * num2;
  }

  if (operator === "/") {
    result = num1 / num2;
  }

  return result;
}
let a = parseFloat(prompt("Enter first number:"));
let b = parseFloat(prompt("Enter second number:"));
let op = prompt("Enter operator (+, -, *, /):");
let output = calculate(a, b, op);
alert("Result: " + output);
