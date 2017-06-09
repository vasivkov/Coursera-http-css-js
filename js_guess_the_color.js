var color_array = ["red", "blue", "grey", "white", "green", "purple", "yellow", "orange"];
var target;
var guess_input;
var is_finished = false;
var count = 0;

function start_game() {
	
	var random_index = Math.random() * color_array.length + 1;
	var int_index = Math.floor(random_index) - 1;
	target = color_array[int_index];

	while(!is_finished){
	guess_input = prompt("I'm thinking of one of these colors: \n\n" +
	color_array.join()+ "\n\n" +
	"What color am I thinking of");
	count++;
	is_finished = check_guess();
	}
}

function check_guess() {
	if((guess_input != "red") && (guess_input != "blue") && (guess_input != "grey") && (guess_input != "white") && (guess_input != "green") && (guess_input != "purple") && (guess_input != "yellow") && (guess_input != "orange") ){
		alert("Sorry, I don't recognize your color. \n\n" +
"Please try again");
	return false;
	}

	if (target > guess_input) {
		alert("Sorry, your guess is not correct! \n\n " +
"Hint: your color is alphabetically lower than mine. \n\n" +
"Please try again");
		return false;
	}

	if (target < guess_input) {
		alert("Sorry, your guess is not correct! \n\n " +
"Hint: your color is alphabetically upper than mine. \n\n" +
"Please try again");
		return false;
	}
	var root = document.documentElement;
	root.style.background = target;
	alert("Congratulations! You have guess the color! \n\n" +
"It took you " + count + "guesses to finish the game! \n\n" +
"You can see the color in the background");
	
	return true;
}
