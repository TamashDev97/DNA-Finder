//Main Data
var names = ["Vladimir", "Sarah", "Eline"];
var chromosome = ["1011101100", "0110001101", "0110101110"];

document.getElementById("search_Btn").addEventListener("click", function() {
    findCriminal();
});

function findCriminal() {
    const dnaSample = document.getElementById("dnaSample").value.trim();
  
    if (dnaSample.length === 0 || dnaSample.length !== chromosome[0].length) {
      alert("Invalid DNA sample. Please enter a valid DNA sequence. (10 DNA Digits Sequence)");
      return;
    }
  
    let maxMatch = 0;
    let suspicious = "";
    let maxPercentage_Level = 0;
  
    for (let i = 0; i < names.length; i++) {
      let match = 0;
      for (let j = 0; j < dnaSample.length; j++) {
        if (dnaSample[j] === chromosome[i][j]) {
          match++;
        }
      }
  
      const percentageMatch = (match / dnaSample.length) * 100;
  
      if (percentageMatch > maxPercentage_Level) {
        maxMatch = match;
        suspicious = names[i];
        maxPercentage_Level = percentageMatch;
      }
    }
  
    document.getElementById("result").textContent = `The main suspicious is: ${suspicious} with a ${maxPercentage_Level.toFixed(2)}% DNA match.`;
  }