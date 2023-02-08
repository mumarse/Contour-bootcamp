// Section – I - MCQs

// 1. Javascript is an Object Based language
// 2. var and let is used to define a variable in javascript.
// 3. objects are passed in JavaScript By Reference.
// 4. getElementById()  methods is used to access HTML elements using Javascript
// 5. const can a datatype be declared to be a constant type
// 6. var a = "Scaler";
// var result = a.substring(2, 4);
// document.write(result);              Answer: al

// 7. var x=12;
// var y=8;
// var res=eval("x+y");                 Answr: 20
// document.write(res);

// 8. AJAX is about updating parts of a web page, without reloading the full-page.
// 9. In Github After you add a file, it becomes, Staged
// 10. Git remote add origin command lets you create a connection between a local and remote repository




// Section – II

// 1. Write a JavaScript program that convert Age into days. You can give hard code value of the number.
function ageIntoDays(age){
    return age * 365;
}
console.log(`Age into Days ${ageIntoDays(22)}`)

// 2. Write a java script function program check whether a string is palindrome or not.
function isPalidrome(str){
    str = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len / 2; i++){
        if (str[i] !== str[len -1 -i]){
            return "String is not palidrome.";
        }
    }
    return "String is palidrome.";
}
console.log(isPalidrome("civic"));

// 3. Write a JavaScript function to format a number up to specified decimal places
function formatNumber(number, decimalPlaces){
    return number.toFixed(decimalPlaces);
}
console.log(formatNumber(23.34, 1));




// Section – III

// 1. Differentiate arrow functions and regular functions. 

/*   Arrow functions and regular functions are two different ways to define functions in JavaScript.
Arrow functions:
    Have a shorter syntax compared to regular functions.
    Do not bind their own this value, they inherit the this value of the surrounding scope.
    Cannot be used as constructors.
    Example:
        // Arrow Function
        const sum = (a, b) => {
            return a + b;
        }

Regular functions:
    Have a more verbose syntax.
    Bind their own this value and arguments object.
    Can be used as constructors.
    Example:
        // Arrow Function
        function sum(a, b) {
            return a + b;
        }

*/


// 2. Write a program that takes a number of greater than 5 digits from input field and shows sum of all odd 
// numbers. For example, if the input is 196783, the sum would be 1 + 9 + 7 + 3 = 20.

function inputNumber(num){
    num = num.toString();
    let sum = 0;
    for (var i = 0; i < num.length; i++ ){
        let digit = parseInt(num.charAt(i));
        if (digit % 2 !== 0){
            sum += digit;
        }
    }
    return sum;
}
console.log(inputNumber(196783));

// 3. Given an integer N, the task is to find the sum of interior angles of an N-sided polygon.
function sumOfAngles(sides){
    return (sides - 4) * 180;
}
console.log(sumOfAngles(6));

// 4. Create a age calculator that takes date of birth of user and shows years, months and days.
function calculateAge(dob){
    let today = new Date();
    let birthDate = new Date(dob);
    let ageInMilliseconds = today - birthDate;
    let ageInSeconds = ageInMilliseconds / 1000;
    let ageInMinutes = ageInSeconds / 60;
    let ageInHours = ageInMinutes / 60;
    let ageInDays = ageInHours / 24;
    let ageInMonths = ageInDays / 30.44;
    let ageInYears = ageInMonths / 12;
    return {
        year: ageInYears,
        months: ageInMonths % 12,
        days: ageInMonths % 30.44
    }
}
console.log(calculateAge("2000-11-11"))



// Section – IV

/*  In this question you must multiply two matrices A and B and store the answer in matrix C. For multiplying 
    matrices, you must take care of the matrix multiplication rule i.e 
    the column number of matrix A should be equal to matrix B.
    Step 1: Get matrix size from the user for both matrices and compare them. If it
    don’t follow the matrix multiplication rule, ask user again for the correct values.
    Step 2: Store values in list for each matrix by prompting user to enter the values.
    Step 3: Calculate the product of matrix A and matrix B.
    Step 4: Display the out in proper format.
*/

const multiplyMatrices = (A, B) => {
    if (!A.length || A[0].length != B.length)
        return "can't be multiplied!"

    const C = [];
    for(let i = 0; i < A.length; i++) {
        let result = [];
        for(let j = 0; j < A[i].length; j++){
            let sum = 0;
            for( let k = 0; k < B.length; k++){
                sum += A[i][k] * B[k][j]; 
            }
            result.push(sum);
        }
        C.push(result);
    }
    for(let i = 0; i < C.length; i++){
        text = '';
        for(let j = 0; j < C[i].length; j++ ){
            text += C[i][j] + " ";
        }
        console.log(text);
    }
}
multiplyMatrices([[2, 3], [3, 4]], [[1, 2], [3, 4]]);