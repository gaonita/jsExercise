let globalTitle = "Winter Is Coming";

// Add your code below this line
function urlSlug(title) {
    return title.toLowerCase().split(/\W/).filter(e => e !== "").join("-");

}
// Add your code above this line

let winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
console.log(winterComing);



function isUpperCase(str) {
    return str == str.toUpperCase() && str != str.toLowerCase();
}




function spinalCase(str) {
    let newStr = [];
    for(let i = 0; i < str.length; i++){
            if(i === 0 || !isUpperCase(str[i])){
                newStr.push(str[i]);
            }else {
                newStr.push(' ', str[i]);
            }
        }
    let joinStr = newStr.join("");


    return joinStr.toLowerCase().split(/\W/).filter(e => e !== "").join("-");
}

console.log(spinalCase('ThisIsSpinalTap'));
//spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".
