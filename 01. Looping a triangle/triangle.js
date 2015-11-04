/*
Looping a triangle 
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length of a string by writing .length after it.
 var abc = "abc" ; 
 console . log ( abc . length ); 
 // → 3

*/


var i,
	sharps,
	MAX_SHARPS_PER_LINE = 7;

for (i = 0 ; i < MAX_SHARPS_PER_LINE ; i++) {

	sharps = "";
	while (sharps.length <= i) {
		sharps += "#";
	}

	console.log(sharps);
}

