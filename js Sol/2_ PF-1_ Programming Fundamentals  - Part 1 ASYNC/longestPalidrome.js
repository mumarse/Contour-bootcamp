// Write a JavaScript function that returns the longest palindrome in a given string.
function palindrome(str){
    let longest = '';
    for (let i = 0; i < str.length; i++){
        for (let j = 0; j < str.length; j++){
            let subString = str.slice(i, j);
            let reverseSubString = subString.split("").reverse().join("");
            if (subString.length > longest.length && subString === reverseSubString){
                longest = subString;
            }
        }
    }
    return longest;
}
console.log(palindrome("level"));