/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
function calcSum(a, b) {
  return a === b ? (a + b) * 3 : a + b;
}
/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/
function checkNumbers(a, b) {
  if (a === 50 || b === 50 || a + b === 50) return true;
}
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/
function removeChar(str, pos) {
  let newStr = str.split("");
  newStr.splice(pos, 1);

  return newStr.join("");
}
/*

4)
 Create a function to find the largest of three given integers.
*/
function largestInt(a, b, c) {
  if (a > b && a > c) return a;
  else if (b > c) return b;
  else return c;
}
/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/
function checkRange(a, b) {
  if (
    (a >= 40 && a <= 60 && b >= 40 && b <= 60) ||
    (a >= 70 && a <= 100 && b >= 70 && b <= 60)
  )
    return true;
}
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/
function copiedStr(str, num) {
  return str.repeat(num);
}
/*

7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/
function cityNames(cityName) {
  let blank = " ";
  return cityName.startsWith("Los") || cityName.startsWith("New")
    ? cityName
    : blank;
}
/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
function sumOfArr(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
function testArr(arr) {
  return arr.includes(1) || arr.includes(3) ? true : false;
}
/*

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
function doesNotContain(arr) {
  return !(arr.includes(1) || arr.includes(3)) ? true : false;
}

// 11)Create a function to find the longest string from a given array of strings.
function longestStr(arr) {
  let longestStr = arr.reduce((a, b) => (a.length > b.length ? a : b));
  return longestStr;
}
// 12)

// Create a function to find the types of a given angle.

// Types of angles:
//     Acute angle: An angle between 0 and 90 degrees.
//     Right angle: An 90 degree angle.
//     btuse angle: An angle between 90 and 180 degrees.
//     Straight angle: A 180 degree angle.

function angleType(angle) {
  let typeOfAngle = [
    "Acute angle",
    "Right angle",
    "Btuse angle",
    "Straight angle",
  ];
  let angleIndex = -1;
  if (angle > 0 && angle < 90) {
    angleIndex = 0;
  } else if (angle === 90) {
    angleIndex = 1;
  } else if (angle > 90 && angle < 180) {
    angleIndex = 2;
  } else if (angle === 180) {
    angleIndex = 3;
  }

  return typeOfAngle[angleIndex];
}

// 13)

// Create a function to find the index of the greatest element of a given array of integers

function greatestIndex(arr) {
  return arr.indexOf(Math.max(...arr));
}

// 14)
// Create a function to get the largest even number from an array of integers.
function largestEvenNum(arr) {
  return arr.filter((x) => x % 2 === 0).reduce((a, b) => (a > b ? a : b));
}

// 16)

// Create a function to check from two given integers, whether one is positive and another one is negative.
function positiveInt(a, b) {
  return (Math.sign(a) == 1 && Math.sign(b) == -1) ||
    (Math.sign(a) == -1 && Math.sign(b) == 1)
    ? true
    : false;
}

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case.
function createStr(str) {
  let newstr = str.slice(0, 3).toUpperCase() + str.slice(3);
  return newstr;
}

// 18)
// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function sumInRange(a, b) {
  let sum = a + b;
  return sum > 50 && sum < 80 ? (sum = 65) : (sum = 80);
}

// 19)
// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

function numToString(num) {
  for (let i = 1; i <= num; i++) {
    if (num % i == 0) {
      switch (i) {
        case 3:
          console.log("Diego");
          break;
        case 5:
          console.log("Riccardo");
          break;
        case 7:
          console.log("Stefano");
          break;
        default:
          console.log(num);
      }
    }
  }
}
numToString(28);
/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
function acronym(phrase) {
  let acr = phrase
    .split(" ")
    .reduce((a, b) => a + b.charAt(0).toUpperCase(), "");
  return acr;
}
console.log(acronym("hello world"));
