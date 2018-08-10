let wizard = { magical: true, power: 10 };
// let magical = wizard.magical;
// let power = wizard.power;

// let { magical, power } = wizard;
let { power, magical } = wizard; //Doesn't matter the order because ES6 will bind the name of properties.
console.log(magical, power);
