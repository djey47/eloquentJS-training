/*
Use the reduce method in combination with the concat method to "flatten" an array of arrays into a single array that has all the elements of the input arrays
*/

function fName(f) {
    'use strict';
    var ret = f.toString();
    ret = ret.substr('function '.length);
    ret = ret.substr(0, ret.indexOf('('));
    return ret;
}

var test = function (f, args) {
    'use strict';
    console.log("* test " + fName(f));
    console.log(args);
    console.log("=>" + f(args));
};



function flatten(arrays) {
    'use strict';
    return arrays.reduce(function (array1, array2) {
        return array1.concat(array2);
    });
}

test(flatten, [[1, 2], [3, 4], [5, 6, 7, 8]]);
