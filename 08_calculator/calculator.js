const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	return arr.reduce((acc, curr) => {
    return acc + curr
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((acc, curr) => {
    return acc * curr
  })
};

const power = function(num1, num2) {
	return num1 ** num2
};

const factorial = function(num) {
	let result = 1;
  let currentNum = num;
  while(currentNum > 0) {
    result *= currentNum--;
  }
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
