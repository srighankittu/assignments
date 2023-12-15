/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let punctuationAndSpaces = /[\.,?! ]/g;
  let newText = str.replace(punctuationAndSpaces, "");
  let st = 0;
  let end = newText.length - 1;
  while (st < end) {
    if (newText[st].toLowerCase() == newText[end].toLowerCase()) {
      st++;
      end--;
    } else {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("AHAa"));
module.exports = isPalindrome;
