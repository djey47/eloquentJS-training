/*
*/

var testCountBs = function(str) {
	console.log("* countBs(", str, ") =", countBs(str));	
};

var countBs = function(str) {

	return countChar(str, "B");
};

var countChar = function(str, char) {

	var i,
		count = 0;

	for (i = 0 ; i < str.length ; i++) {

		if (str.charAt(i) === char) {
			count++;
		}
	}

	return count;
};

testCountBs("BBC");
testCountBs("bB");
testCountBs("b");