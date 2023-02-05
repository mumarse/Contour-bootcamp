// Write a program that to find the most frequent item of an array? [3,'a','a','a',2,3,'a',3,'a',2,4,9,3]
function mostFrequentItem(array){
    let frequency = {};
    let maxItem = array[0];
    let maxCount = 1;
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        if (!frequency[item]){
            frequency[item] = 1;
        } else {
            frequency[item]++ ;
        }
        if (frequency[item] > maxCount){
            maxCount = frequency[item];
            maxItem = item;
        }
    }
    return maxItem;
}
let items = [3,'a','a','a',2,3,'a',3,'a',2,4,9,3];
console.log(mostFrequentItem(items));