function reverseString(str) {
    str.split();
    let reverseStr=[];
    for(let i = 0; i < str.length; i++){
        reverseStr.unshift(str[i]);
    }
    return reverseStr;
}

reverseString("hello");
