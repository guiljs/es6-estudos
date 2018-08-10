let magical = true;
let power = 2;

let ranger = { magical: false, power: 9 };
({ magical, power } = ranger);
console.log(magical, power);