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
  return addLine(5, addLine(7, addLine(5, [])));
}

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

/* TODO:
Remove weird (1) thing
Fix the imbalance in randomHaikuForm
Text Read-In thing
*/
