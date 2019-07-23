function destroyer(arr, ...theArgs) {
    return arr.filter(e => !theArgs.includes(e));
}
//console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// Sorted Union
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
// In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.
//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

function uniteUnique(...theArgs){
    let arr = [];
    for(let i = 0; i < theArgs.length; i++){
        for(let j = 0; j <theArgs[i].length; j++){
            if( !arr.includes(theArgs[i][j])){
                arr.push(theArgs[i][j]);
            }
        }
    }
    return arr;
}

console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]]));
//should return [1, 3, 2, [5], [4]].

//
// console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
// //
// should return [1, 2, 3, 5].
// uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8].
