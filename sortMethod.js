function alphabeticalOrder(arr) {
    return arr.sort(function(a,b){
        return a > b;
    });

    // Add your code above this line
}
console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
