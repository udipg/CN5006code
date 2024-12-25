const ps = require("prompt-sync")
const prompt = ps();

const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter a number:"));

const sum = number1 + number2;
console.log('The sum of '+number1 +'and' + number2 + 'is:'+ sum);


const multiply = (number1 * number2);
console.log('The multiplication of '+number1 +'and' + number2 + 'is:'+ multiply);

const divide = number1 / number2;
console.log('The division of '+number1 +'and' +number2 +'is:' +divide);

const subtract = number1 - number2;
console.log('The subtration of '+number1 +'and' +number2 +'is:' +subtract);