const makeChange = (c) => {
  // your name hereunction makeChange(amount) {
    let quarters = Math.floor(amount / 25);
    amount %= 25; // Get the remaining amount after quarters

    let dimes = Math.floor(amount / 10);
    amount %= 10; // Get the remaining amount after dimes

    let nickels = Math.floor(amount / 5);
    amount %= 5; // Get the remaining amount after nickels

    let pennies = amount; // The remaining amount is the number of pennies

    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
}

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
