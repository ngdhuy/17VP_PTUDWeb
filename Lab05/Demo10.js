// compare operator in ES6

var a = 1; 
var b = 1.0;
var c = "1";

console.log("1 == 1.0 => ", a == b);
console.log("1 === 1.0 => ", a === b);
console.log("1 == '1' => ", a == c);
console.log("1 === '1' => ", a === c);
console.log("1.0 == '1' => ", b == c);
console.log("1.0 === '1' => ", b === c);