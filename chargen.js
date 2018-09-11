const fs = require('fs');
const cAlphas = "A" + "a" + "B" + "b" + "C" + "c" + "D" + "d" + "E" + "e" + "F" + "f" + "G" + "g" + "H" + "h" + "I" + "i" + "J" + "j" + "K" + "k" + "L" + "l" + "M" + "m" + "N" + "n" + "O" + "o" + "P" + "p" + "Q" + "q" + "R" + "r" + "S" + "s" + "T" + "t" + "U" + "u" + "V" + "v" + "W" + "w" + "X" + "x" + "Y" + "y" + "Z" + "z";
const cNums = "0" + "1" + "2" + "3" + "4" + "5" + "6" + "7" + "8" + "9";
const cPunc = "!" + "@" + "#" + "$" + "%" + "^" + "&" + "*" + "_" + "-" + "=" + "+" + "," + "." + "?";
const c = cAlphas + cNums + cPunc;
const cSplit = c.split("");
const myArray = cSplit.sort();
const len = myArray.length;

function main()
{
	function pad2(n) { return n < 10 ? '0' + n : n }

	let stTime = new Date();
	let m = (stTime.getFullYear().toString() + pad2(stTime.getMonth() + 1) + pad2(stTime.getDate()) + "_" + pad2(stTime.getHours()) + pad2(stTime.getMinutes()) + pad2(stTime.getSeconds()));
	let stream = fs.createWriteStream(m + "-js-rt.txt", { flags : 'w' },);

	fs.appendFile("log.txt", "Starting javascript generation at: " + m + "\n", (err) => {
		if (err) throw err;
	});

	for (let x = 0; x <= 100; x++)
	{
		let v = Math.floor(Math.random() * len);
		for (let i = 0; i <= 100000; i++)
		{
			let j = myArray[v];
			// fs.appendFile(m + "-js-rt.txt", j, (err) => {  
			// 	if (err) throw err;
			// });
			stream.write(myArray[v], null, 'utf8', function(){
				if (err) throw err;
	  			console.log('file is updated');
			});
		}
		console.log("Writing string num: " + x);
	}
	let endTime = new Date();
	let n = (endTime.getFullYear().toString() + pad2(endTime.getMonth() + 1) + pad2(endTime.getDate()) + "_" + pad2(endTime.getHours()) + pad2(endTime.getMinutes()) + pad2(endTime.getSeconds()));
	fs.appendFile("log.txt", "Ending javascript generation at: " + n + "\n", (err) => {
		if (err) throw err;
	});
	// fs.close();
}

main();