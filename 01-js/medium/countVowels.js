/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/
function countVowels(str) {
  let count = 0;
  let mp = new Map();
  const vowels = ["a", "e", "i", "o", "u"];
  
  vowels.forEach((element) => {
    mp.set(element, true);
    mp.set(element.toUpperCase(), true);
  });

  for (let char of str) {
    if (mp.has(char)) {
      count++;
    }
  }
  
  return count;
}

module.exports = countVowels;

