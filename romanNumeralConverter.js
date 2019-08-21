// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ['M', 'CM', 'D', 'CD', 'C','XC','L','XL','X','IX','V','IV','I' ];

    let romanized = '';

    for(let i = 0; i < decimal.length; i++){
        while(decimal[i] <= num){
            romanized += roman[i];
            num -= decimal[i];
        }
    }

    return romanized;
}

//
// let roman = {
//     1: 'I',
//     4: 'IV',
//     5: 'V',
//     9: 'IX',
//     10:'X',
//     40: 'XL',
//     50: 'L',
//     90: 'XC',
//     100: 'C',
//     400: 'CD',
//     500: 'D',
//     900: 'CM',
//     1000 : 'M'
// };
//
// Math.pow(10,0);
// Math.pow(10,1);
//
// function oneDigit(str) {
//     let result = '';
//     if(Number(str) < 4){
//         for(let i = 0; i < Number(str); i++){
//             result += roman["1"]
//         }
//     }if(Number(str) === 4){
//         result += roman["4"]
//     }if(Number(str) === 5){
//         result += roman["5"]
//     }if(Number(str) < 9){
//         result += 'V';
//         for(let i = 0; i < Number(str) - 5; i++){
//             result += roman["1"]
//         }
//     }
//     if(Number(str) === 9){
//         result += roman["9"]
//     }
//     return result;
// }
//
//
//
// function convertToRoman(num) {
//     let str = num.toString();
//     let digits = str.length ;
//     for(let i = 0; i < digits; i++){
//         console.log(str[i], oneDigit(str[i]))
//     }
//



    //
    // if(num < 10){
    //     for(let i = 1; i < num / 5 ; i++){
    //         result += roman["5"]
    //     }
    //     for(let i = 0; i < num % 5; i++){
    //         result += roman["1"]
    //     }
    // }
    //


    // if(num % 5 === 0){
    //     if(num % 10 === 0){
    //         for(let i=0; i< num/10; i++){
    //             result += roman["10"]
    //     }
    //     }else{
    //             for(let i=0; i< num/5; i++){
    //                 result += roman["5"]
    //             }
    //         }
    //     }
    // return result;
// }

console.log(convertToRoman(1984));
