// Write a JavaScript function to count the number of vowels in a given string.

function countVovles(str){
    let pattern = /[aeiou]/gi;
    let vowels = str.match(pattern);
    return vowels ? vowels.length : 0;
}
console.log(countVovles("jhgsjdsfsldfhsjka"))


// Write a JavaScript program to test the first character of a string is uppercase or not.

function upperCase(str){
    let pattern = /^[A-Z]/;
    return pattern.test(str);
}
console.log(upperCase("Akjh"))


// Write a JavaScript program to check a credit card number.

function validation(num){
    let pattern = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
    return pattern.test(num);
}
 
var cardNumber = "1234123412341234";
if (validation(cardNumber)){
    console.log("Card number is valid")
} else {
    console.log("card number is not valid")
}


//  Write a JavaScript program to count number of words in string.

function countNum(str){
    return str.match(/\b\w+\b/g).length;
}
console.log(countNum("sdsadas"));

/*  Write a pattern that matches e-mail addresses:
        o The personal information part contains the following ASCII characters.
            ▪ Uppercase (A-Z) and lowercase (a-z) English letters.
            ▪ Digits (0-9).
            ▪ Characters ! # $ % & ' * + - / = ? ^ _ ` { | } ~
            ▪ Character . ( period, dot or fullstop) provided that it is not the first or last character and it will not come
one after the other.                              */

function valEmail(num){
    let pattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;
    return pattern.test(num);
}
var email = "umar@gmail.com";
if (valEmail(email)){
    console.log("Email is correct.");
}else{
    console.log("Email is not correct.");
}


// sort array using js sort in ASC and DESC order

let arr = [2,4,6,32,1,3, 9,0];
    arr.sort(function(a,b){
        // return b - a;      //  for descnding
        return a - b;         //  for assending   
    })
console.log(arr);


/*       Create Form on UI (html, css) with following fields (name, email ,password, date of birth , 
    id card number). now validate form using regular exp. (name must be without spaces , email, password must
    contain number , alphabets , specials character and above all must be greater then 8 character , 
    id card validation , date of birth validation MM-DD-YYYY)          */

    function validateForm() {
        // Regular expressions for validation
        let nameRegExp = /^\S*$/;
        let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        let dobRegExp = /^(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/;
        let idRegExp = /^\d{5}-\d{7}-\d{1}$/;

        // Get values from form
        let name = document.forms["myForm"]["name"].value;
        let email = document.forms["myForm"]["email"].value;
        let password = document.forms["myForm"]["password"].value;
        let dob = document.forms["myForm"]["dob"].value;
        let idcard = document.forms["myForm"]["idcard"].value;
  
        // Validate name
        if (!nameRegExp.test(name)) {
          alert("Name must be without spaces.");
          return false;
        }
  
        // Validate email
        if (!emailRegExp.test(email)) {
          alert("Email must be a valid email address.");
          return false;
        }
  
        // Validate password
        if (!passwordRegExp.test(password)) {
          alert("Password must contain at least one letter, one number, and one special character and be at least 8 characters long.");
          return false;
        }
  
        // Validate dob
        if (!dobRegExp.test(dob)) {
          alert("Date of birth must be in the format MM-DD-YYYY.");
          return false;
        }

        // Validate id
        if (!idRegExp.test(idcard)) {
            alert("ID Card Number must be in format "12345-1234567-1".");
            return false;
        }
  
        // If all validation checks pass, return true
        alert("From submitted successfully")
        return true;
      }


/*    make array in with multiple objects [{name: <Your name in multiple form i.e Ali, ALI, aLi, aLI>}] 
    then find name in array regardless of case sensitivity, find name whose last will be <you name last letter 
    like for example OMER's last letter are <er>>        */

let names = [{name: "Ali"}, {name: "ALI"}, {name: "aLi"}, {name: "aLI"}];
    function findName(name){
        for (let i = 0; i < names.length; i++){
            if (names[i].name.toLowerCase().includes(name.toLowerCase())) {
                return `${name} is in the list`;
            }
        }
        return `${name} is not in the list`;
    }
console.log(findName("ali"));
