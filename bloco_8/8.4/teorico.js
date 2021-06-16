const numbers = [32, 15, 3, 2, -5, 56, 10, -1000];

const sum = (res, num) => res + num;
const sumNumbers = numbers.reduce(sum);
console.log(sumNumbers);