/*
Chess board
*/

var i,
	j,
	row,
	SIZE = 16;

for(i = 0 ; i < SIZE ; i++) {

	row = "";

	for (j = 0 ; j < SIZE ; j++) {

		if (j % 2 === 0) {
			row += (i % 2 === 0) ? " " : "#";				
		} else {
			row += (i % 2 === 0) ? "#" : " ";				
		}
	}

	console.log(row);
} 
