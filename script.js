const makeChange = (c) => {
  // your name here
	 c = parseInt(c);
    let change = {
        q: Math.floor(c / 25),
        d: Math.floor((c % 25) / 10),
        n: Math.floor(((c % 25) % 10) / 5),
        p: ((c % 25) % 10) % 5
    };
    return change;

};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
