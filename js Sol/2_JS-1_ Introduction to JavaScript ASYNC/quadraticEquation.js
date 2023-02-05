// Write a program that will calculate quadratic equations ax^2 + bx + c. You set any value to a, b and c
function quadraticEquation(a, b, c) {
  if (a === 0) {
    let x = -c / b;
    return `Roots are real and same: x1 = x2 = ${x}`;
  } else {
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
      return "No real roots";
    } else if (delta === 0) {
      let x = -b / (2 * a);
      return `Roots are real and same: x1 = x2 = ${x}`;
    } else {
      let x1 = (-b + Math.sqrt(delta)) / (2 * a);
      let x2 = (-b - Math.sqrt(delta)) / (2 * a);
      return `Roots are: x1 = ${x1} and x2 = ${x2}`;
    }
  }
}
console.log(quadraticEquation(10, 12, 0));