// var vs let

var a = 10;
if (a % 2 == 0)
{
    let a = 5;
    console.log(a);
}
console.log(a);