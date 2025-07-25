const makeChange = (c) => {
 function makeChange(amount) {
  let change = {
    q: 0, 
    d: 0,
    n: 0,
    p: 0  
  };

  // Calculate quarters
  change.q = Math.floor(amount / 25);
  amount %= 25;

  // Calculate dimes
  change.d = Math.floor(amount / 10);
  amount %= 10;

  // Calculate nickels
  change.n = Math.floor(amount / 5);
  amount %= 5;

  // Calculate pennies
  change.p = amount;

  return change;
}

}
// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
