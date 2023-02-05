// Write a program to find the area of a triangle where the length of the sides is 2, 3 and 4.
let a = 2;
let b = 3;
let c = 4;
function triangle(){
    let s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
console.log(triangle());