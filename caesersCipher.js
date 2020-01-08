// function rot13(str) {
//     let newStr = [];
//     for(let i=0; i < str.length; i++){
//         let code = str.charCodeAt(i);
//         if(code===32){
//             newStr.push(' ')
//         }
//         else if(code<65){
//             newStr.push(str[i])
//         }
//         else if(code<78){
//             newStr.push(String.fromCharCode(code+13))
//         }else{
//             newStr.push(String.fromCharCode(code-13))
//         }
//     }
//     return newStr.join('').toString()
// }

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC!"));

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
        .split('')
        .map(char => {
            const pos = alphabet.indexOf(char);
            return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
        })
        .join('');
}
