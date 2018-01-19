let rps = [
	"Rock",
  "Paper",
  "Scissor"
]

function computerPlay(){
  return rps[Math.floor(Math.random() * rps.length)].toUpperCase();
  let userChoice = prompt("Choose: Paper, Scissor, Or Rock").toUpperCase();
}

let playerScore = 0;
let cpuScore = 0;
const rounds = 5;


function playRound(playerSelection, computerSelection){
	computerPlay();
	if (playerSelection === "ROCK" && computerSelection === "SCISSOR"){
		playerScore += 1;
		console.log("You win! Rock beats Scissor");
	}
	else if (playerSelection === "ROCK" && computerSelection === "PAPER"){
		cpuScore += 1;
		console.log("You lose. Paper beats Rock");
	}
	else if (playerSelection === "PAPER" && computerSelection === "SCISSOR"){
		cpuScore += 1;
		console.log("You lose. Scissor beats Paper");
	}
	else if (playerSelection === "SCISSOR" && computerSelection === "ROCK"){
		cpuScore += 1;
		console.log("You lose. Rock beats Scissor");
	}	
	else if (computerSelection === "ROCK" && playerSelection === "PAPER"){
		playerScore += 1;
		console.log("You win! Paper beats Rock");
	}
	else if (computerSelection === "PAPER" && playerSelection === "SCISSOR"){
		playerScore += 1;
		console.log("You win! Scissor beats Paper");
	}
	else {
		console.log("You tie. Bummer");
	}
}

function game() {
  for(let i=0; i < rounds; i++){
  	let cpuSelect = (function computerPlay(){
    return rps[Math.floor(Math.random() * rps.length)].toUpperCase();
    })();
    let userChoice = prompt("Choose: Paper, Scissor, Or Rock").toUpperCase();
  	// console.log(playRound(userChoice,cpuSelect));
    if (playerScore === 5){
  	  return ("Game Over. You are the winner!");
    }
    else if (cpuScore === 5) {
  	  return ("Gane Over. You lose");
    }
    else {
  	  playRound(userChoice,cpuSelect);
    }
  }
  cpuScore > playerScore ? console.log("CPU wins. " + cpuScore + " - " + playerScore) : "";
  playerScore > cpuScore ? console.log ("You win!!! " + playerScore + " - " + cpuScore + " Hooray!") : "";
  playerScore === cpuScore ? console.log("Game ends in a tie.") : "";
}

game();

