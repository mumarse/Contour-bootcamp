/* Write a program in which you will randomly generate a number between 1 to 10. Save that number in a 
variable. Now just like in the sync explanation we got the value from and <input> tag. Get the value from 
the <input> convert it into integer number. Then compare previously randomly generated and input number form 
the user. If both numbers are same then show alert “Good Job” otherwise show alert “You missed */

var randomNum = Math.floor(Math.random() * 10) + 1;
var inputNum = prompt("input");

var inputNum = parseInt(inputNum);
if (randomNum === inputNum) {
  alert("Good Job");
} else {
  alert("You Missed");
}