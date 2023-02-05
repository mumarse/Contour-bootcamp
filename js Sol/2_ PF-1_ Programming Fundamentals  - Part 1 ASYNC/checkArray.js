let intArr = [];
let strArr = [];

function checkArray(arr){
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] === 'number'){
            intArr.push(addToIntArray(arr[i]));
        } else if (typeof arr[i] === 'string'){
            strArr.push(concatToStringArray(arr[i]));
        }
    }
    return {intArray: intArr, strArray: strArr}
}

function addToIntArray(num){
    if (intArr.length === 0){
        return num;
    } else {
        return intArr[intArr.length - 1] + num;
    }
}

function concatToStringArray(str){
    if (strArr.length === 0){
        return str;
    } else {
        return strArr[strArr.length - 1] + str;
    }
}

console.log(checkArray([1, 2, 3, "hello", 3, "world"]));