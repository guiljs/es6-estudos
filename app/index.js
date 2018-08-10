// let points = [10, 20, 30];


// points = points.map(element => element + 1);

// console.log(points);


let lengths = [3, 7, 5];
let multiple = 8;

const scale = (multiple) => {
    let realLifeLengths = lengths.map(x => x*multiple);
    
  return realLifeLengths; // TODO fill out the rest;
};
scale(8);