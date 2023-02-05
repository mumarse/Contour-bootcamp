// Write a program in which you have to display the number in sorted order. You don’t have to sort through 
// any arrays but you need to use nested if else clause to display the number in sorted order inside the Browser 
// console. You can use Boolean operators to compare the number. Declare and initialize three variables a =3, b= 1
// and c = -1.

var a = 3;
var b = 1;
var c = -1;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(c, b, a);
  } else {
    console.log(b, c, a);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(c, a, b);
  } else {
    console.log(a, c, b);
  }
} else {
  if (a >= b) {
    console.log(b, c, a);
  } else {
    console.log(a, b, c);
  }
}