// special case of array in ES7

var a = [1, 2, 3]

let sum = (a, b, c) => a + b + c
console.log("sum(1, 2, 3) = ", sum(1, 2, 3))
console.log("sum(a): ", sum(...a))