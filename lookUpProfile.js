//Setup
let contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {

    let check = 0;

    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            check = check + 1;
        }
    }
    if (check === 0){
        return "No such contact";
    }


    for (let i = 0; i < contacts.length; i++) {
        if (name === contacts[i].firstName) {
            if (contacts[i].hasOwnProperty(prop) === true) {
                return contacts[i][prop];
            } else {
                return "No such property"
            }
        }

    }
}
// Change these values to test your function
    console.log(lookUpProfile("Sherlock", "likes"));
