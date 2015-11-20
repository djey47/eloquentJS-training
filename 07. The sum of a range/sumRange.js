/*
*/

var testRange = function(start, end, step) {
	console.log("* range(", start, "," , end, ",", step, ") =", range(start, end, step));	
};

var testSum = function(range) {
	console.log("* sum(", range, ") =", sum(range));	
};

var range = function(start, end, step) {

	var array = [];
	var i;
	var increment = step || 1;

	var shouldContinue = function(current, end, increment) {
		return increment >= 0 && current <= end || increment < 0 && current >= end;
	};

	for (i = start ; shouldContinue(i, end, increment) ; i += increment) {
		array.push(i);
	}

	return array;
};

var sum = function(array) {

	var sumResult = 0;

	array.forEach(function(item) {

		sumResult += item;

	});


	return sumResult;
};

testRange(1, 10);

testSum( range(1,10) );

testRange(1, 10, 2);

testRange(5, 2, -1);