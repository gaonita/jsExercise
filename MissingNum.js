function missing(arr) {
    let gapArr=[];
    for (let i = 0; i < arr.length -1 ; i++) {
        let gap = arr[i+1] - arr[i];
        gapArr.push(gap)
    }
    console.log(gapArr)
    let max = gapArr[0]
    for (let i = 0; i < gapArr.length; i++) {
        if(gapArr[i] > max){
            max = gapArr[i]
        }
    }
    return arr[gapArr.indexOf(max)]+max/2
}


console.log( missing([1,3,4,5]));
console.log( missing([0, 60, 180]));
console.log( missing([2,4,6,8,10,14,16]));
    // [
    // [[1, 3, 4, 5],
    //     [[2, 4, 6, 8, 10, 14, 16], 12],
    //     [[12, 15, 18, 21, 24, 30, 33], 27],
    //     [[0, 60, 180], 120],
    //     [[-1.25, 1.25, 2.5], 0],
    //     [[1, 19, 28], 10],
    //     [[100, 500, 900, 1300, 2100, 2500, 2900], 1700],
    //     [[1.5, 2, 3], 2.5]
    // ].forEach(x => Test.assertSimilar(missing(x[0]), x[1]))
