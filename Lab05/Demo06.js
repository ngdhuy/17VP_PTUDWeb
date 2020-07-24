// Array in ES6: add and remove item

var a = [1, 2, 3, 4, 5 ,6];

// get length
console.log("Length: ", a.length);

// append item
a.push(99);
console.log("Array: ", a);

// remove last item
let t = a.pop();
console.log("Array: ", a);
console.log("t = ", t);

// remove first item 
t = a.shift();
console.log("Array: ", a);
console.log("t = ", t);

// remove range item
a.splice(2,1);
console.log(a);

// insert after
a.splice(2,1, "Hello");
console.log(a);

// get range item
t = a.slice(2, 4);
console.log("Array: ", a);
console.log("t = ", t);

// reverse array
var b = a.reverse();
console.log("A: ", a);
console.log("B: ", b);