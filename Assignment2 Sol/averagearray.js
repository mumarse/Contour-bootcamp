/* Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of 
those numbers. */

const arrayAverage = (numbers) => {
    let sum = 0;
    for(i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum / numbers.length;
}
console.log(arrayAverage([1,2,3,4,5]))