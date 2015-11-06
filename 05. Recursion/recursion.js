/*
*/

var testIsEven = function(n) {
	console.log("* isEven(", n, ") =", isEven(n));	
};

var isEven = function(n) {

	n = Math.abs(n);

	if (n === 0) {
		return true;
	}

	if (n === 1) {
		return false;
	}

	return isEven(n - 2);
};

testIsEven(50);
testIsEven(75);
testIsEven(-1);

