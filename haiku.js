var fs = require('fs');
var haiku_generator = require('./haiku_generator');
var cmudictFile = readCmudictFile('./cmudict.txt');
var sylDict = [];

//reads in the CMU Dict file and processes it
function readCmudictFile(file) {
  return fs.readFileSync(file).toString();
}

function formatData(data) {
  var lines = data.toString().split("\n"),
      lineSplit
      lines.forEach(function(line) {
        lineSplit = line.split(" ");
        var word = lineSplit[0]
        var parseArr = lineSplit.slice(2);
        var sylNum = syllableNumber(parseArr);
        if (Array.isArray(sylDict[sylNum])) {
          sylDict[sylNum].push(word);
        }
        else {sylDict[sylNum] = [word];}
      });
}

formatData(cmudictFile);

//function that takes a parse and returns the number of syllables
function syllableNumber(parse) {
  var sylNumber = 0;
  for (var i in parse) {
    if (parse[i].match(/\d/)) {sylNumber++;}
  }
  return sylNumber;
}



haiku_generator.createHaiku([5, 7, 5], sylDict);

//module exports
module.exports = {}
