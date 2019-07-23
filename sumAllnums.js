// function sumAll(arr) {
//     let sum2 = arr[0] + arr[1];
//     let newArr = arr.sort((a,b)=>a-b);
//     console.log(newArr);
//     let sumAll = 0;
//     for(let i = newArr[0]+1; i < newArr[1]; i++){
//         sumAll +=i;
//     }
//     console.log(sumAll);
//     return sum2 + sumAll;
// }
//
// console.log(sumAll([10, 5]));
//

// let Nolan = watchList.filter(item => item["Director"] === "Christopher Nolan").map(item => ({"imdbRating": item["imdbRating"]}));


// function diffArray(arr1, arr2) {
//     let newArr = [];
//     let copyArr1 = arr1.slice(0, arr1.length);
//     for(let i = 0; i < arr2.length; i++){
//         for(let j = 0; j < copyArr1.length; j++){
//             if(arr2[i] === copyArr1[j]){
//                 copyArr1.splice(j,1);
//             }
//         }
//     }
//     for(let i = 0; i < arr1.length; i++){
//         for(let j = 0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]){
//                 arr2.splice(j,1);
//             }
//         }
//     }
//     newArr = copyArr1.concat(arr2);
//     return newArr
// }

 function refactoring(arr1, arr2) {
    let copyArr1 = arr1.slice(0,arr1.length).filter(e => !arr2.includes(e));
    let copyArr2 = arr2.slice(0,arr2.length).filter(e => !arr1.includes(e));
    let newArr = copyArr1.concat(copyArr2)
    return newArr;
}

console.log(refactoring([1, "calf", 3, "piglet"], [1, "calf", 3, 4]));
