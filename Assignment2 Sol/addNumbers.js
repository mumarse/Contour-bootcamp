/* Create 2 input holder in like in the previous exercises. Now create a button and on button call a 
function. This function should add two integer values. But if a string is added to the integer should display 
the error in the alter box through error handling.              */

function addNumbers(){
    try{
        var input1 = document.getElementById("input1").value;
        var input2 = document.getElementById("input2").value;

        if (input1 === "string" & input2 === "string"){
            throw Error("Input must be numbers.");
        }
        var result= parseInt(input1) + parseInt(input2);
        alert(result);

    } catch (error){
        alert(error.message);
    }
  }