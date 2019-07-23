// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
//
// const squareList = (arr) => {
//     let squaredIntegers = [];
//
//     for (let i = 0; i < realNumberArray.length; i++) {
//
//         if (realNumberArray[i] > 0 && realNumberArray[i] === parseInt(realNumberArray[i], 10)) {
//             squaredIntegers.push(realNumberArray[i] * realNumberArray[i]);
//         }
//     }
//     return squaredIntegers;
// };

// console.log(squareList(realNumberArray));

//console.log(realNumberArray.map(squareList));

console.log([1,2,3].map(element => element * 2)) // short hand for returning one value
console.log([1,2,3].map(element => {
    console.log()
    return element * 2
}))

console.log(
    [1,2,3,4,5,6,7,8,9]
        .filter(element => element % 2 == 0)
        .map(element => element * 2)
)

const squareList = (arr) => {
    arr.map((element) => {
        let squaredIntegers = [];
        //element > 0 && element === parseInt(element, 10) ? squaredIntegers.push(element * element)
    })
}

//
// console.log([10,20,30, 40].map((element, index) => {
//    return index % 2 == 0 ? element * 3 : element
// }));
//


//////reduce()///////////
// var numbers = [175, 50, 25];
// console.log(numbers.reduce(myFunc));
// function myFunc(total, num) {
//     console.log(total, num)
//     return total - num;
// }
