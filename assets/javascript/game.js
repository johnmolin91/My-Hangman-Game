 $(document).ready(function() {

var wins = 0;
var possibleGuesses = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lettersRight = [];
var lettersWrong = [];
var current = "";
var number = 9;
var correctCounter = 0;
var placeholder = "";
var possible = ["OLIVER", "FLUME", "YOTTO", "VAULTS"];
var oldDiv = document.getElementById("currentWord");

function playGame() {
	lettersRight = [];
	lettersWrong = [];
	number = 9;
	correctCounter = 0;
	numberDiv.innerHTML = number;
	lettersDiv.innerHTML = lettersWrong;
	current = possible[Math.floor(Math.random() * possible.length)];
	console.log(current);
	placeholder = "";

	for (var i = 0; i < current.length; i++) {
	placeholder += "_";
	}
	oldDiv.innerHTML = placeholder;
}

var numberDiv = document.getElementById("numberGuesses");
var lettersDiv = document.getElementById("lettersGuessed");
var resultDiv = document.getElementById("result");
var winsDiv = document.getElementById("wins");

playGame();

function gameResult() {
	if (placeholder == current) {
		resultDiv.innerHTML = "You Win!";
		wins++;
		winsDiv.innerHTML = "Wins: " + wins;
		playGame();
	}
}

document.onkeyup = function(event) {
	var userGuess = event.key;
	var actGuess = userGuess.toUpperCase();

	if (possibleGuesses.indexOf(actGuess) > -1 && lettersRight.indexOf(actGuess) < 0 && lettersWrong.indexOf(actGuess) < 0) {

		if (current.indexOf(actGuess) > -1) {
			lettersRight.push(actGuess);
			placeholder = "";
			for (var i = 0; i < current.length; i++) {
				if (lettersRight.indexOf(current[i]) >= 0){
					placeholder += current[i];
				} else {
					placeholder += "_"
				}
			}
			oldDiv.innerHTML = placeholder;
			correctCounter++;
		}
		if (current.indexOf(actGuess) < 0) {
			lettersWrong.push(actGuess);
			number--;
			numberDiv.innerHTML = number;
			lettersDiv.innerHTML = lettersWrong;
		}
	}
	gameResult();
}

});