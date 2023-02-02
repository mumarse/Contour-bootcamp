function minMax(){
    var inputNumbers = document.getElementById("inputNumbers").value;
    var numbersArray = inputNumbers.split(",").map(Number);
    var min = numbersArray[0];
    var max = numbersArray[1];

    for (var i = 0; i < numbersArray.length; i++){
        if (numbersArray[i] < min){
            min = numbersArray[i];
        } else if (numbersArray[i] > max){
            max = numbersArray[i];
        }
    }
    document.getElementById("result").innerHTML = "Min: " + min + " Max: " + max;
}