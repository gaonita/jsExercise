function confirmEnding(str, target) {

    let strEndIndex = str.length - 1 ;
    let targetEndIndex = target.length -1;
    for(let i = strEndIndex, j = targetEndIndex; j >= 0; i--, j--){
        if(str[i] !== target[j]){
            return false;
        }
    }
    return true;
}

console.log(confirmEnding("Bastian", "ien"));
