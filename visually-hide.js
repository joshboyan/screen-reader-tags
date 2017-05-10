/*jshint esversion: 6 */
(function visuallyHide() {
	'use strict';
	// npm dependencies
	const fs = require('fs');
	const process = require('process');
	const cheerio = require('cheerio');
	// Get the specified file info from the user
	const workingDirectory = process.cwd().slice(2);
	const filePath = workingDirectory + '/' + process.argv[2];
	const fileName = process.argv[2];
	const newFileName = fileName.slice(0, -5) + '-sr-optimized.html';	
	const $ = cheerio.load(fs.readFileSync(filePath));

	// Check to make sure user provides argument for command line
	if (typeof process.argv[2] === 'undefined') {
		console.log('\n' + 'Error:' + '\n' + 'You must enter the excel file you wish to build tables from as an argument' + '\n' + 'i.e., node toTable.js resolutions.xlsx');
		return;
	} else {
		// Check that the file is the correct type
		if (process.argv[2].slice(-4) !== 'html') {
			console.log('\n' + 'This program will only convert html files' + '\n' + 'Please enter correct file type');
			return;
		} else {
			// Edit and write the document
			findAndAdd();
			writeNewFile();
		}
	}

	// Add visually-hide class to non-distiunguishable links
	function findAndAdd() {
		// Iterate through all the list items
		$('li a').each((i, element) => {
			// Non-distinguishable links
			if ($(element).text() === '1' ||
				$(element).text() === '2' ||
				$(element).text() === '3'
			) {
				// Get parent text to add as label for ND links
				let label = $(element).parent('li').children('a').first().text();
				console.log(label);
				// Complete node to be added to the DOM
				let newNode = '<span class="visually-hide">' + label + '</span> ';
				$(element).prepend(newNode);
			}
		});
	}

	function writeNewFile() {
		fs.writeFile(newFileName, $.html(), (err) => {
			if (err) { throw err; }
			console.log('\n' + 'Your new file has been created in', newFileName);
		});
	}
}());
