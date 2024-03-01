//task 1
function readFile() {
  const chooseFile = document.getElementById("chooseFile");
  let file = chooseFile.files[0];
  if (file) {
    const reader = new FileReader();

    reader.readAsText(file);

    reader.onload = function (event) {
      let text = document.getElementById("textInput");
      text.value = event.target.result;
      // total symbols
      let symbols = [];
      for (let i of text.value) {
        symbols.push(i);
      }
      totalSymbols.textContent = `Total Symbols: ${symbols.length}`;

      //total words
      let splitted = text.value.split(" ");
      totalWords.textContent = `Total words: ${splitted.length}`;

      //longest word
      let longest = "";
      for (let i of splitted) {
        if (i.length > longest.length) {
          longest = i;
        }
      }
      longestWord.textContent = `Longest Word: ${longest}`;

      //shortest word
      let shortest = "";
      splitted.sort(function (a, b) {
        return a.length - b.length;
      });
      shortest = splitted[0];
      shortestWord.textContent = `Shortest Word: ${shortest}`;

      //Average
      let sum = 0;
      let averageNum = 0;
      for (let i = 0; i < splitted.length; i++) {
        sum += splitted[i].length;
      }
      averageNum = sum / splitted.length;

      average.textContent = `Average length of words: ${averageNum}`;
    };
  }
}
