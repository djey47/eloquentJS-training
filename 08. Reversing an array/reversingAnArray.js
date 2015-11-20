/*
*/

var testReverseArray = function(array) {
	console.log("* reverseArray(", array, ") =", reverseArray(array));	
};	

var testReverseArrayInPlace = function(array) {
	console.log("* testReverseArrayInPlace(", array, ")");	
	reverseArrayInPlace(array);
	console.log("=> ", array);	
};	

var reverseArray = function(array) {

	var reversedArray = [];

	array.forEach(function(item) {
		reversedArray.unshift(item);
	});

	return reversedArray;
};

var reverseArrayInPlace = function(array) {

	var tempArray = [];
	var i;
	var size = array.length;

	array.forEach(function(item) {
		tempArray.push(item);
	});

	for (i = 0 ; i < size ; i++) {
		array[i] = tempArray.pop();
	}
};

testReverseArray([1, 2, 3]);

testReverseArrayInPlace([4, 5 ,6]);