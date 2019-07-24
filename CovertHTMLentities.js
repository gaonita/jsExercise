// Intermediate Algorithm Scripting: Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    let arr = str.split('');
    let entities = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&apos;'
    };
    let keysArr = Object.keys(entities);
    for(let i = 0; i < arr.length; i++){
        if(keysArr.includes(arr[i])){
            arr.splice(i, 1, entities[arr[i]])
        }
    }
    return arr.join('');
}


console.log(convertHTML("Schindler's List"));
//should return Dolce &​amp; Gabbana.
console.log(convertHTML("Hamburgers < Pizza < Tacos"));
//should return Hamburgers &​lt; Pizza &​lt; Tacos.
//console.log(convertHTML("Sixty > twelve"));
//should return Sixty &​gt; twelve.
// convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;.
//  should return Schindler&​apos;s List.
// convertHTML("<>") should return &​lt;&​gt;.
// convertHTML("abc") should return abc.
