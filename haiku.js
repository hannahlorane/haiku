var fs = require('fs');
var haiku_generator = require('./haiku_generator');
var cmudictFile = readCmudictFile('./cmudict.txt');
var sylDict = [];

//reads in the CMU Dict file and processes it
function readCmudictFile(file) {
  return fs.readFileSync(file).toString();
}

// populates the syllable dictionary with the words in the CMU dictionary file
function initializeSylDict(data) {
  var lines = data.toString().split("\n"),
      lineSplit
      var allButParens = /([A-Z]*)/;
      lines.forEach(function(line) {
        lineSplit = line.split(" ");
        var word = allButParens.exec(lineSplit[0])[0];
        var parseArr = lineSplit.slice(2);
        var sylNum = syllableNumber(parseArr);
        if (Array.isArray(sylDict[sylNum])) {
          sylDict[sylNum].push(word);
        }
        else {sylDict[sylNum] = [word];}
      });
}

//function that takes a parse and returns the number of syllables
function syllableNumber(parse) {
  var sylNumber = 0;
  for (var i in parse) {
    if (parse[i].match(/\d/)) {sylNumber++;}
  }
  return sylNumber;
}

initializeSylDict(cmudictFile);

/* Options:
  No arguments: haiku of form 5 / 7 / 5
  -r: random haiku form
  series of numbers: haiku with that form
*/
var form = [];
if (process.argv.length === 2) {form = [5, 7, 5];}
else if (process.argv[2] === "-r") {
  form = haiku_generator.randomHaikuForm();
}
else {
  for (var w = 2; w < process.argv.length; w++) {
    form.push(+process.argv[w]);
  }
  console.log(form);
}

haiku_generator.createHaiku(form, sylDict);
