/*
Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument,
 and write a listToArray function that produces an array from a list. 
 Also write the helper functions prepend , which takes an element and a list and creates a new list that adds the element to the front of the input list, 
 and nth , which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element. 
 If you haven’t already, also write a recursive version of nth .
*/
var util = require('util');

var testArrayToList = function(array) {
	console.log("* testArrayToList(" + array + ")");

	var list = arrayToList(array);

	console.log("=> " + util.inspect(list, false, 10, true));
};

var testListToArray = function(list) {
	console.log("* testListToArray(" + list + ")");

	var array = listToArray(list);

	console.log("=> " + array);
};

var testPrepend = function(item, list) {
	console.log("* testPrepend(" + item + "," + list + ")");

	var newList = prepend(item, list);

	console.log("=> " + util.inspect(newList, false, 10, true));
};

var testNth = function(list, index) {
	console.log("* testNth(" + list + "," + index + ")");

	var item = nth(list, index);

	console.log("=> " + item);
};

var arrayToList = function(array) {
	if (!array) {
		return undefined;		
	}

	return createListItem(array);
};

var createListItem = function(array) {
//	console.log(array);

	if (array.length === 0) {
		return null;		
	}
	
	var listItem = {

			"value": array[0],
			"rest": createListItem(array.slice(1))

		};

	return listItem;
};

var listToArray = function(list) {

	var array = [];

	populateArray(array, list);		

	return array;
};

var populateArray = function(array, subList) {
	if (subList) {
		array.push(subList.value);

		populateArray(array, subList.rest);
	}

};

var prepend = function(item, list) {

	return {
		"value": item,
		"rest": list
	};
};

var nth = function(list, index) {

	return lookup(list, 1, index);

};

var lookup = function(listItem, depth, index) {
	if (!listItem) {
		return undefined;
	}

	if (depth === index) {
		return listItem.value;
	}

	return lookup(listItem.rest, depth + 1, index);
};

testArrayToList([1, 2, 3]);

var list = arrayToList([1, 2, 3]);
testListToArray(list);

testPrepend(5, list);

testNth(list, 0);
testNth(list, 1);
testNth(list, 2);
testNth(list, 3);
testNth(list, 4);