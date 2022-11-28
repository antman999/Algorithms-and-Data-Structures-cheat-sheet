/**
 * @param {string} string1
 * @param {string} string2
 * @return {boolean}
 */

// **Challenge**
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

/**
 * Questions before writing any code:
 * How are we handling uppercase and lowercase
 * Should we handle if a user passes in a number in a string
 * What should the output look like?
 * How should we handle whitespace
 *
 * Approach:
 * First we are checking if the length of both strings are the same if not we know they are not anagrams and we can return false
 * Next if the string is blank for both we can return true
 * Next we create two objects
 * we will loop through the first array and place them in a key value pair like so
 * {a: 2, b: 1}
 * where the key is the letter and value is the amount of occurances it happens
 * We will repeat the loop for the second string.
 *
 * After both are done we will loop throught the first object
 * and check if the key is in the second object, since lookups in objects are o(1) this shouldn't be a problem
 * if it is not then we will return false
 *
 * next in the loop we will check if they both have the same amount of values so something like this
 *
 * objectA = {a: 2}
 * objectB = {a: 1}
 *
 * we know this cant be an anagram because they should all have the same values according to the pair
 * if so we return false.
 *
 * if all those pass we know for certain this is an anagram and we can return true.
 */

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  if (string1.length === 0 && string2.length === 0) {
    return true;
  }

  let letterObject1 = {};
  let letterObject2 = {};

  for (let i = 0; i < string1.length; i++) {
    const letter = string1[i];
    letterObject1[letter]
      ? (letterObject1[letter] += 1)
      : (letterObject1[letter] = 1);
  }

  for (let i = 0; i < string2.length; i++) {
    const letter = string2[i];
    letterObject2[letter]
      ? (letterObject2[letter] += 1)
      : (letterObject2[letter] = 1);
  }

  for (let key in letterObject1) {
    if (!(key in letterObject2)) {
      return false;
    }

    if (letterObject2[key] !== letterObject1[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false) // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); // true
