var fs = require('fs');
var process = require('process');
var workingDirectory = process.cwd().slice(2);
var workingFile = workingDirectory + '/' + process.argv[2];
var cheerio = require('cheerio');
var $ = cheerio.load(fs.readFileSync(workingFile));

