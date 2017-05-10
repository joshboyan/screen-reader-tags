var fs = require('fs');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var workingFile = workingDirectory + '/' + process.argv[2];
var cheerio = require('cheerio');
var $ = cheerio.load(fs.readFileSync(workingFile));

//Check to make sure user provides argument for command line
if (typeof process.argv[2] === 'undefined') {
	console.log('\n' + 'Error:' + '\n' + 'You must enter the excel file you wish to build tables from as an argument' + '\n' + 'i.e., node toTable.js resolutions.xlsx');
	return;
} else {
	// Check that the file is the correct type
	if (process.argv[2].slice(-4) !== 'html') {
		console.log('\n' + 'This program will only convert html files' + '\n' + 'Please enter correct file type');
		return;
	} else {
		// Create the HTML file name to write the table to
		var fileName = process.argv[2];
		var newFileName = fileName.slice(0, -5) + '-hidden.html';
	}
}

$('li a').each((i, element) => {
	var inner = $('a').text();
	//console.log(inner);	
	if ($(element).text() === '1' ||
		$(element).text() === '2' ||
		$(element).text() === '3'
	) {
		var label = $(element).parent('li').children('a').first().text();
		console.log(label);
		var newNode = '<span class="visually-hide">' + label + '</span> ';
		$(element).prepend(newNode);
	}
});


// Write htmlFile variable to the disk with newFileName as the name
fs.writeFile(newFileName, $.html(), (err) => {
	if (err) throw err;
	console.log('\n' + 'Your new file has been created in', newFileName);
});
