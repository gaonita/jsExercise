// You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and
// turn everything into the same case (lower or upper case) in order to check for palindromes.
// We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".

function palindrome(str) {
    let arr = str.toLowerCase()
        .split('')
        .filter(e => e.match(/[A-Za-z0-9]/) !== null);

    // return arr.slice(0, arr.length / 2).every((char, index) => char === arr[arr.length - 1 - index]);

    for (let i = 0, j = arr.length - 1; i <= arr.length / 2, j >= arr.length / 2; i++, j--) {
        // console.log("i: ", arr[i], "  j: ", arr[j]);
        if (arr[i] !== arr[j]) {
            return false;
        }
    }
    return true;
}

console.log(palindrome("A man, a plan, a canal. Panama"));


console.log(palindrome("0_0 (: /-\ :) 0-0"));

console.log(palindrome("almostomla"));
//should return false.
