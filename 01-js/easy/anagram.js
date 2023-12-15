/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  // let anagram_obj = {};
  let obj = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    if (!obj.hasOwnProperty(str1[i])) {
      obj[str1[i].toLowerCase()] = 1;
    } else {
      obj[str1[i].toLowerCase()] += 1;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (!obj.hasOwnProperty(str2[i].toLowerCase())) {
      return false;
    } else {
      obj[str2[i].toLowerCase()] -= 1;
    }
  }

  Object.keys(obj).forEach((key) => {
    if (obj[key] != 0) {
      return false;
    }
  });

  return true;

  // console.log(obj);
}

// console.log(isAnagram("abcdf", "dcbag"));
module.exports = isAnagram;
