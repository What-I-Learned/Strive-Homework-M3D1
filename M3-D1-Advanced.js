/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
function maxChar(str) {
  const obj = {};
  str.split("").forEach((char) => (obj[char] = obj[char] + 1 || 1));
  return Object.keys(obj).reduce((a, b) => (obj[a] >= obj[b] ? a : b));
}
/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
function checkIfAnagram(str1, str2) {
  //   const obj1 = {};
  //   const obj2 = {};
  //   str1
  //     .split(" ")
  //     .join("")
  //     .split("")
  //     .forEach((char) => (obj1[char] = obj1[char] + 1 || 1));

  //   str2
  //     .split(" ")
  //     .join("")
  //     .split("")
  //     .forEach((char) => (obj2[char] = obj2[char] + 1 || 1));

  //   console.log(
  //     Object.keys(obj1).toString() == Object.keys(obj2).toString() &&
  //       Object.values(obj1) == Object.values(obj2)
  //   );
  console.log(
    str1.toLowerCase().split("").sort().join("") ===
      str2.toLowerCase().split("").sort().join("")
  );
  console.log(
    str1.toLowerCase().split("").sort().join(""),
    str2.toLowerCase().split("").sort().join("")
  );
}
checkIfAnagram("listen", "silent");
/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false
 */
function palindrome(str) {
  let reverseStr = str.toLowerCase().split("").reverse().join("");
  return str === reverseStr ? true : false;
}
/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
function reverseInt(num) {
  let reverseInt = num.toString().split("").reverse().join("");
  return num < 0 ? -+parseInt(reverseInt) : +reverseInt;
}
console.log(reverseInt(-90));
/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
function reverseStr(str) {
  return str.toLowerCase().split("").reverse().join("");
}

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/

function subarrays(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    chunks.push(chunk);
  }
  return chunks;
}

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

function pyramid(height) {
  for (let i = 0; i < height; i++) {
    // 2n+1
    let stars = "*".repeat(2 * i + 1);
    let spacesBefore = " ".repeat(height - i - 1);
    console.log(spacesBefore + stars);
  }
}
pyramid(4);
/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
function arrMatrix(size) {
  let matrix = [];
  for (let row = 0; row < size; row++) {
    matrix[row] = [];
    for (let col = 0; col < size; col++) {
      matrix[row] = matrix[col];
    }
  }
}
console.log(arrMatrix(2));
