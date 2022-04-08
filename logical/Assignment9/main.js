var secret = 50;
var guess = "";
while(guess != secret){
    guess = prompt("Guess the number: ");
    if(guess == secret){
        alert("u won u guessed the right number");
        break;
    }
    else if (guess>secret){
        alert("too low");
    }
    else{
        alert("too high");
    }
}