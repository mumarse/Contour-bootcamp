// Write a program to Find the sum of all elements/numbers of a given array?  [1,3,4,6,7]
function findSum(array){
    let sum = 0;
    for (let i = 0;i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
console.log(findSum([1,3,4,6,7]))