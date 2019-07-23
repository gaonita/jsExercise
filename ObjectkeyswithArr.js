let users = {
    Alan: {
        age: 27,
        online: false
    },
    Jeff: {
        age: 32,
        online: true
    },
    Sarah: {
        age: 48,
        online: false
    },
    Ryan: {
        age: 19,
        online: true
    }
};

function getArrayOfUsers(obj) {
    let newArr;
    newArr = Object.keys(obj);
    let anotherArr =[];
    for(let i = 0; i < newArr.length; i++){
        anotherArr = Object.keys(obj[newArr[i]]);
    }
    for(let i = 0; i < anotherArr.length; i++){
        newArr.push(anotherArr[i]);
    }
    return newArr;
}

console.log(getArrayOfUsers(users));
