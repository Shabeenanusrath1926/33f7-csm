function compoundInterest(principal, rate, time) {
  const amount = principal * (1 + rate) ** time;
  const interest = amount - principal;
  return { amount, interest };
}

const principal = 2000;
const rate = 0.07;  
const time = 5;     

const result = compoundInterest(principal, rate, time);
console.log("Total Amount:", result.amount.toFixed(2));    
console.log("Compound Interest:", result.interest.toFixed(2)); 


