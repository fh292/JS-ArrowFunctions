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

const sum = (a, b) => {
  console.log(`${a + b}`);
};
sum(3, 4);

const square = (x) => {
  console.log(`${x * x}`);
};
square(4);
