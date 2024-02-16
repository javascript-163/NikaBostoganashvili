//task 1
function readFile() {
  return new Promise(() => {
    let chooseFile = document.getElementById("chooseFile");
    let file = chooseFile.files[0];

    if (file) {
      const reader = new FileReader();

      reader.readAsText(file);

      reader.onload = function (event) {
        document.getElementById("textInput").value = event.target.result;
      };
    }

    let text = document.getElementById("textInput").value;

    //total words
    let splitted = text.split(" ");
    totalWords.innerHTML = `Total words: ${splitted.length}`;

    //total symbols
    let symbols = [];
    for (let i of text) {
      symbols.push(i);
    }
    totalSymbols.innerHTML = `Total Symbols: ${symbols.length}`;

    //longest word
    let longest = "";
    for (let i of splitted) {
      if (i.length > longest.length) {
        longest = i;
      }
    }
    longestWord.innerHTML = `Longest Word: ${longest}`;

    //shortest word
    let shortest = "";
    splitted.sort(function (a, b) {
      return a.length - b.length;
    });
    shortest = splitted[0];
    shortestWord.innerHTML = `Shortest Word: ${shortest}`;
  });
}
