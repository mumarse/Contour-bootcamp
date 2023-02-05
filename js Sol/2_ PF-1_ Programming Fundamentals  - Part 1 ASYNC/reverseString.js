// Write a program to find reverse a given string using JavaScript
function reverseString(str){
    return str.split("").reverse().join("");
}
let originalString = "hello";
let reversedString = reverseString(originalString);
console.log(reversedString);