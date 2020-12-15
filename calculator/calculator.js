function add(a,b) {
	return a + b;
}

function subtract(a,b) {
	return a - b;
}

function sum(arr) {
	if (arr.length === 0) return 0;
	if (arr.length === 1) return arr[0];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function multiply(arr) {
	let sum = arr[0];
	for (let i = 1; i < arr.length; i++) {
		sum *= arr[i];
	}
	return sum;
}

function power(a,b) {
	return a ** b;
}

function factorial (fact) {
	if (fact === 0 || fact === 1) return 1;
	let total = fact;
	for (let i = fact - 1; i >= 1; i--) {
		total *=  i;
	}
	return total;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}