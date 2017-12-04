
var randomWords = ['rock', 'paper', 'scissors'];

var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 
'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 
'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;

//when clickMe is clicked, start the game
function startGame() {
	console.log("working");

	//code to display remaining guesses
	var guessesRemain = 12;
	var displayRemain = document.getElementById("numberGuess");
	displayRemain.innerHTML=guessesRemain;

	//code to display letters the user has already guessed
	var lettersGuessed = "";
	var displayGuesses = document.getElementById("lettersGuess");
	displayGuesses.innerHTML=lettersGuessed;

	//choses a random word from the randomWords array and turns each letter 
	//into an object of an array
	var chosenWord = randomWords[Math.floor(Math.random() * randomWords.length)];
	chosenArr = chosenWord.split('');

	//displays the number of dashes needed for chosen word and turns those
	//dashes into objects of an array and displays them
	var dashes = "";
	for (i = 0; i < chosenWord.length; i++) {
		dashes += "-";
	}
	var dashesArr = dashes.split('');
	var displayDashes = document.getElementById("wordDisplay");
	displayDashes.innerHTML=dashes;

	//starts function when user clicks a letter
	document.onkeyup = function(event) {

      //makes sure the guess is a letter
      var userGuess = event.key.toLowerCase();
      if (alphabet.includes(userGuess)) {
      	var userGuess = event.key.toLowerCase();
      }
      else {
      	alert('Please guess a letter');
      	return;
      }

      //if this a repeat guess, do not count
      if (lettersGuessed.includes(userGuess)) {
      	lettersGuessed = lettersGuessed;
      	guessesRemain = guessesRemain;
      }
      else {
      	lettersGuessed += userGuess;
      	guessesRemain = guessesRemain - 1;
      }

      //iterates through the letters of the chosen word to determine if 
      //the guess is in it and displays to user
      for (i = 0; i < chosenArr.length; i++) {
      	if (chosenArr[i] == userGuess) {
      		dashesArr[i] = userGuess;
      	} 
      	else if (dashesArr[i] != '-') {
      		dashesArr[i] = dashesArr[i];
      	}
      	else {
      		dashesArr[i] = "-";
      	} 	
      }

      //lets the user know if they have won the game
      if (dashesArr.includes('-')) {
      	var displayChosen = document.getElementById("wordDisplay");
      	displayChosen.innerHTML=dashesArr;
      } else {
      	wins++;
      	var displayChosen = document.getElementById("wordDisplay");
      	displayChosen.innerHTML='You win! Click anywhere to play again.';
      	return;
      }


      //lets the user know if they have lost the game
      if (guessesRemain == 0) {
      	var displayChosen = document.getElementById("wordDisplay");
      	displayChosen.innerHTML='You lose! Click anywhere to play again.';
      	var displayRemain = document.getElementById("numberGuess");
      	displayRemain.innerHTML= " " + guessesRemain;
      	return;
      }

      //updates the game display with new scores
      var displayRemain = document.getElementById("numberGuess");
      displayRemain.innerHTML= " " + guessesRemain;
      var displayWins = document.getElementById("gameWins");
      displayWins.innerHTML= " " + wins;
      var displayGuesses = document.getElementById("lettersGuess");
      displayGuesses.innerHTML= " " + lettersGuessed;
  }

}