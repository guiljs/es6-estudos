let fellowship = ["Frodo", "Gandalf", "Aragorn"];

let [hobbit, wizard, ranger] = fellowship;

console.log(hobbit, wizard, ranger);



let c = [100, 200, 300, 400, 500];
let [a, ...b] = c;
console.log(a, b);