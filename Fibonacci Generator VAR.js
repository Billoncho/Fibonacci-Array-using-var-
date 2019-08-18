// This creates a function using "var" that will accept a number as input 'n' for the number of elements to create in the Fibonacci array. //


fibonacciArray = [];
var n = 0;
var elementCount = 0;
var firstE = 0;
var secondE = 0;

function fibonacciGenerator(n) {
    for (var i = 0; i < n; i++) {
    if (i < 1) {
		fibonacciArray.push(elementCount);
		elementCount++;
    } 
	else if (fibonacciArray[1] !== 1) {
		fibonacciArray.push(elementCount);
    } 
	
	else if ((fibonacciArray[0] === 0) && (fibonacciArray[1] === 1)) {
		elementCount = (fibonacciArray[fibonacciArray.length - 1]) + (fibonacciArray[fibonacciArray.length -2]);
		fibonacciArray.push(elementCount);
    }
   
    console.log(fibonacciArray)
    }
}