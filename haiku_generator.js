function createHaiku(structure, dictionary) {
  //choses random words of the correct length from the syllable dict and prints them to the console with the correct \n
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

function randomHaikuForm() {
  return [2, 3, 2, 3, 2, 3, 2];
}

module.exports = {
  createHaiku: createHaiku,
  randomHaikuForm: randomHaikuForm
}
