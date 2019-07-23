function repeatStringNumTimes(str, num) {
    // repeat after me
    let newArr = [];
    let newStr = str.split(''); // ['a','b','c']

    for(let j = 0; j < num; j++){
        for(let i = 0; i < newStr.length; i++){
            newArr.push(newStr[i]);
        }

    }
    newArr.join('');
    return newArr;
}

repeatStringNumTimes("abc", 3);
