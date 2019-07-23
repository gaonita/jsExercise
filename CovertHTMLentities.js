//
// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


function convertHTML(str) {
let newStr ='';
    for(let i = 0; i < str.length; i++){
        if(str[i] = '&'){
             newStr = str.replace('&', '&amp;')
        } else if(str[i] = '<'){
            newStr =  str.replace('<', '&amp;')
        } else if(str[i] = '>'){
            newStr = str.replace('>', '&amp;')
        } else if(str[i] = '"'){
            newStr = str.replace('"', '&amp;')
        } else if(str[i] = '\''){
            newStr = str.replace('\'', '&amp;')
        }
    }
    return newStr;
}


let arr =
{'&':'&amp;', '<':'&lt;', '>' : '&gt;', '\"' : '&quot;', '\'' : '&apos;'}
;
console.log(convertHTML("Dolce & Gabbana"));
    //should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
//should return Hamburgers &​lt; Pizza &​lt; Tacos.
console.log(convertHTML("Sixty > twelve")) ;
//should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
//     convertHTML("Schindler's List") should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
//     convertHTML("abc") should return abc.
