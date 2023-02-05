/*	As previously we have made a program of adding two number. Similarly you have to extend that program and 
make a calculator with buttons ranging from 0 to 9 and also buttons including + , - , x , / , = . Take input 
through 2 different <input>  fields and also press the button  of operation you want to preform. Make a 
<textarea> for the output and as you press = button answer will be displayed in it. (hint you can use switch 
to determine which operation to perform.) */

window.onload = function(){

const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const addButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divideButton = document.getElementById("divide");
const output = document.getElementById("output");

function performOperation(operation) {
  switch (operation) {
    case "add":
      output.value = parseFloat(input1.value) + parseFloat(input2.value);
      break;
    case "subtract":
      output.value = parseFloat(input1.value) - parseFloat(input2.value);
      break;
    case "multiply":
      output.value = parseFloat(input1.value) * parseFloat(input2.value);
      break;
    case "divide":
      output.value = parseFloat(input1.value) / parseFloat(input2.value);
      break;
    default:
      output.value = "Invalid Operation";
  }
}

addButton.addEventListener("click", function () {
    performOperation("add");
  });
  
  subtractButton.addEventListener("click", function () {
    performOperation("subtract");
  });
  
  multiplyButton.addEventListener("click", function () {
    performOperation("multiply");
  });
  
  divideButton.addEventListener("click", function () {
    performOperation("divide");
  });
  
  equalButton.addEventListener("click", function () {
    performOperation(document.activeElement.id);
  })
};