// Write anonymous function that will calculate the mean of array of items passed.

var mean = function(array){
    var sum = 0;
    for (var i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum / array.length;
  }
  console.log(mean([1,2,3,4]))