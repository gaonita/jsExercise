// Translate the provided string to pig latin.
// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".
// If a word begins with a vowel you just add "way" to the end.
// Input strings are guaranteed to be English words in all lowercase.

let vowel = ['a', 'i', 'u', 'e', 'o'];
function checkVowel(e) {
     let judge = vowel.filter(item => item === e);
    return judge.length > 0;
}
function translatePigLatin(str) {
    let newStr = str.slice(0,str.length).split("");

    if(newStr.filter(e => checkVowel(e)).length === 0){
        return newStr.concat(['a','y']).join('');
    }
    else if(checkVowel(newStr[0])===true){
        return newStr.concat(['w','a','y']).join('');
    }
    else {
        for(let i = 0; i < newStr.length; i++){
            if(!vowel.includes(newStr[i])){
                newStr.push(newStr[i]);
                newStr.splice(i,1,'*');
            }else {
                break
            }
        }
        newStr = newStr.concat(['a','y']);
        return newStr.filter(e => e !== '*').join('');
        }
}

//Test
console.log(translatePigLatin("cns"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));

// translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
