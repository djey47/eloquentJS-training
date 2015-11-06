/*
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can do that ourselves now. Write a function min that takes two arguments and returns their minimum.
*/

var testMin = function(one, two) {
	console.log("* min(", one , ",", two , ") =", min(one, two));
};

var min = function(one, two) {

	if (one < two) {
		return one;
	}

	if (two < one) {
		return two;
	}
};

testMin(1, 2);
testMin(2, 1);
testMin(3, 3);
