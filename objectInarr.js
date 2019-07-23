function whatIsInAName(collection, source) {
    let sourceKeys = Object.keys(source);
    return collection.filter((obj) => {
        for (let i = 0; i < sourceKeys.length; i++) {
            if (!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]) {
                return false;
            }
        }
        return true;
    });
}

console.log(whatIsInAName([{first: "Romeo", last: "Montague"}, {first: "Mercutio", last: null},
    {first: "Tybalt", last: "Capulet"}], {last: "Capulet"}));

