// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //method 1
        // let reverseString = '';
        // for(i=0; i<str.length; i++){
        //     reverseString = str[i] + reverseString;
        // }
        // return reverseString;
    
    // method 1.2
    // let reverseString = '';
    // for(let character of str){
    //     reverseString = character +reverseString;
    // }
    //  return reverseString;
    //method 2
            // let reverseString = str.split('');
            // let len = reverseString.length;
            // for(i=0; i<(reverseString.length-1)/2; i++){
            //     let first = reverseString[i];
            //     // console.log(first);
            //     reverseString[i] = reverseString[len-1];
            //     reverseString[len-1] = first;
            //     console.log(reverseString[i] , reverseString[len-1]);
            //     len = len - 1;
            // }
             
            // return reverseString.join('');
            // return (5/2)
    //method 3rd
                // const arr =str.split('');
                // arr.reverse();
                // return arr.join('');
    //method 4th 
            // return str.split('').reverse().join('');
    //method 5th
    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');
    //method 6th
    // debugger;
    return str.split('').reduce((reversed, character) => character + reversed, '');

}
//  reverse('advd')
module.exports = reverse;
