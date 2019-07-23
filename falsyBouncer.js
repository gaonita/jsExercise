function bouncer(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] = false) {
            arr = arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(bouncer([7, "ate", "", false, 9]));
