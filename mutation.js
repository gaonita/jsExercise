function mutation(arr) {
    let arr1 = arr[0].split('').map(element => element.toLowerCase());
    let arr2 = arr[1].split('').map(el => el.toLowerCase());
    console.log(arr1, arr2);
    let judge = 0;
    for(let i = 0; i < arr2.length; i++){
        for(let j = 0; j < arr1.length; j++){
            if(arr2[i] === arr1[j]){
                judge += 1;
                break;
            }
        }
    }
    console.log(judge);
    if(judge === arr2.length){
        return true;
    }return false;
}

console.log(mutation(["Hello", "heLLo"]));
