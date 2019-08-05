function titleCase(str) {
    let newStr = str.toLowerCase();
    let arr = newStr.split(' ');
    //let newArr = [];
    let Arr = arr.map(e =>
        e.replace(e.charAt(0), e.charAt(0).toUpperCase())
    );

    return Arr.join(' ');

    // for( let i = 0; i < arr.length; i++){
    //     if(arr[i - 1] === ' ' || i === 0){
    //         arr[i] = arr[i].toUpperCase()
    //     }
    //     newArr.push(arr[i]);
    // }
    // let title = newArr.join('');
    // return title;
}

console.log(titleCase("I'm a little tea pot"));
