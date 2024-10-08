// Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}
********************************/

const NAME = "Fatmah";
const greet = () => {
  console.log(`Hello, ${NAME}!`);
};

greet();

// Write a simple arrow function that takes two parameters
//and returns their sum.
const sum = (a, b) => {
  console.log(`${a + b}`);
};
sum(3, 4);

// Write a simple arrow function that squares a number.
const square = (x) => {
  console.log(`${x * x}`);
};
square(4);

// [🌶️🌶️] Create an arrow function that takes an array of numbers and
// returns a new array with each number squared.
const numbers = [1, 2, 3];

function SquaredNumbers(numbers) {
  return numbers.map((x) => x * x);
}

console.log(SquaredNumbers(numbers));
