function chunkArrayInGroups(arr, size) {
    // Break it up.
    let bigArr = [];
    while(arr.length > 0){
        let el = arr.slice(0,size);
        arr= arr.slice(size);
        console.log(arr);
        bigArr.push(el);
    }
    return bigArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
