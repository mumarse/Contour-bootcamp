/* Write an arrow function named dashTwixt2Evens that accepts a number and inserts dashes (-) between two 
even numbers. */

const dashTwixt2Evens = (number) => {
    let str = number.toString();
    let result = '';
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
        result += str[i] + '-';
        } else {
            result += str[i];
        }
    }
return result;
}
console.log(dashTwixt2Evens(1245465))