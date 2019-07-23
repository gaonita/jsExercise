function filteredArray(arr, elem) {
    let newArr = [];
    // change code below this line
    for (let i = 0;  i < arr.length; i++){
        let check = true;
        for (let j = 0; j < arr[i].length; j++){
            if(arr[i][j] === elem){
                check = false;
            }
        }
        if(check === true){
            newArr.push(arr[i]);
        }
    }
    // change code above this line
    return newArr;
}

// change code here to test different cases:
//
//
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));
