/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined; 
    }

    let maxi = numbers[0];
    for (let index = 1; index < numbers.length; index++) {
        const element = numbers[index];
        if (element > maxi) {
            maxi = element;
        }
    }
    return maxi;
}

module.exports = findLargestElement;

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined; // Handle empty array case
    }

    return numbers.reduce((maxi, current) => (current > maxi ? current : maxi), numbers[0]);
}

module.exports = findLargestElement;

function findLargestElement(numbers) {
    if (numbers.length === 0) {
        return undefined; // Handle empty array case
    }

    return Math.max(...numbers);
}

module.exports = findLargestElement;
