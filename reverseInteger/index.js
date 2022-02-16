// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let x = Math.sign(n);
    let reversed = n.toString().split('').reverse().join('');
    let reverseint = parseInt(reversed)
    if(n<0){
        return reverseint * (-1)
    }
    return reverseint;
    // console.log(reversed);
    // let str = 0;
    // if(x == -1 ){
    //     let value = reversed.substring(0, reversed.length-2);
    //     str= parseInt(value);
    //     // console.log(value);
    // }
    // else{
    //     let value = reversed.substring(2);
    //     str= parseInt(value);
    //     // console.log(value);
    // }
    // return str;
}

module.exports = reverseInt;
