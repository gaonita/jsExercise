function frankenSplice(arr1, arr2, n) {

    let arr3 = arr2.slice(0, arr2.length);

    for(let i = 0, j = n; i < arr1.length; i++, j++){
        arr3.splice(j, 0, arr1[i])
    }


    // arr2.splice(n, 0, arr1.slice(0,arr1.length));
    // let str = arr2.join(',');

    return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
