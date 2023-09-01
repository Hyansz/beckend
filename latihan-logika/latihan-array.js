const getLargestNumber = (arr) => {
    return Math.max(...arr);
}

const filterEvenNumbers = (arr) => {
    return arr.filter(num => num % 2 === 0);
}

const sumArray = (arr) => {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

const findDuplicates = (arr) => {
    const countMap = {};
    const duplicates = [];
    
    for (const num of arr) {
        if (countMap[num]) {
            if (countMap[num] === 1) {
                duplicates.push(num);
            }
            countMap[num]++;
        } else {
            countMap[num] = 1;
        }
    }
    
    return duplicates;
}

const sortArray = (arr) => {
    return arr.slice().sort((a, b) => a - b);
}

const concatenateArrays = (arr1, arr2) => {
    return [...arr1, ...arr2];
}

const calculateAverage = (arr) => {
    const sum = arr.reduce((acc, curr) => acc + curr, 0);
    return sum / arr.length;
}

const allPositive = (arr) => {
    return arr.every(num => num > 0);
}

const removeDuplicates = (arr) => {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}

const findIndexOf = (arr, target) => {
    return arr.indexOf(target);
}

module.exports = { getLargestNumber, filterEvenNumbers, sumArray, findDuplicates, sortArray, concatenateArrays, calculateAverage, allPositive, removeDuplicates, findIndexOf };