function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b
    });

    if (arr.length === 0) {
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num) {
            arr.splice(i, 0, num);
            return i;
        }
    }
    return arr.length;
}

console.log(getIndexToIns([2, 2, 10], 5));
