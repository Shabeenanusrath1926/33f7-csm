function displayResult(name, score) {
  console.log(name + " scored " + score + " points!");
}

displayResult("Alice", 95);  // Alice scored 95 points!

function rectangle(length, width) {
  const area = length * width;
  const perimeter = 2 * (length + width);
  return { area, perimeter };
}

// Example:
const result = rectangle(10, 5);
console.log("Area:", result.area);
console.log("Perimeter:", result.perimeter);


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
    return "Error: Division by zero!";
  }
  return a / b;
}

// Example usage:
const num1 = 12;
const num2 = 4;

console.log("Add:", add(num1, num2));         // 16
console.log("Subtract:", subtract(num1, num2)); // 8
console.log("Multiply:", multiply(num1, num2)); // 48
console.log("Divide:", divide(num1, num2));     // 3


function factorial(n) {
  if (n < 0) return "Invalid input"; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); 
console.log(factorial(3)); 
console.log(factorial(0)); 


