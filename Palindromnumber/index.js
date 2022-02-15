// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    //method 1
    let len = str.length;
    let bool = false;
    for(i=0; i<(str.length-1)/2; i++){
     if(str[i]===str[len-1]){
        bool = true;
     }
     else{ 
        bool = false;
        break;
     }
     len = len-1;
    }
    return bool;

    //method 2
    // first reverse the string than compare both
}

module.exports = palindrome;
