//choses random words of the correct length from the syllable dict and prints them to the console with the correct \n
function createHaiku(structure, dictionary) {
  var totalSylCount = 0;
  var line = "";
  for (var w = 0; w < structure.length; w++) {
    var wordList = dictionary[structure[w]];
    line += " " + wordList[Math.floor(wordList.length*Math.random())];
    totalSylCount += structure[w];
    if (totalSylCount === 5 || totalSylCount === 12 || totalSylCount === 17) {
      console.log(line)
      line = "";
    }
  }
}

// Generates a random Haiku syllabic form
function randomHaikuForm() {
  return addLine(5, addLine(7, addLine(5, [])));
}

// Adds a new line's worth of syllables to a randomly generated form
function addLine(n, form) {
  if (n === 0) {return form;}
  else {
    var next = 1 + Math.floor(Math.random()*n);
    form.push(next);
  }
  return addLine(n-next, form);
}

module.exports = {
  createHaiku: createHaiku,
  randomHaikuForm: randomHaikuForm
}
