function titleCase(str) {
    let newStr = str.toLowerCase()
    let arr = newStr.split('');
    let newArr = [];
    for( let i = 0; i < arr.length; i++){
        if(arr[i - 1] === ' ' || i === 0){
            arr[i] = arr[i].toUpperCase()
        }
        newArr.push(arr[i]);
    }
    let title = newArr.join('');
    return title;
}

console.log(titleCase("I'm a little tea pot"));
