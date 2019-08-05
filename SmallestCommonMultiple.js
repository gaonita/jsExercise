function smallestCommons(arr) {
    arr.sort();
    let result = 1;
    for(let i = 1; i <= arr[1]; i++){
        result *= i;
    }
    return result;
}


console.log(smallestCommons([5,1]));
