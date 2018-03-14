window.onload = initializeGame;

let RockPaperScissorEnum = {
  Rock: 0,
  Paper: 1,
  Scissor: 2
}

// Score state
let cpuScore;
let playerScore;

// Player/Computer RPS selection for the current round
let cpuChoice;
let playerChoice;

// Game state
let isGameOver;

function initializeGame() {
  console.log("Wiring up game");
  // Wire up event handlers
  document.getElementById("Rock").addEventListener("click", onPlayerSelection);
  document.getElementById("Scissor").addEventListener("click", onPlayerSelection);
  document.getElementById("Paper").addEventListener("click", onPlayerSelection);

  // Set default values
  cpuScore = 0;
  playerScore = 0;
  isGameOver = false;
  waitingForPlayerInput = false;
}


function onPlayerSelection(e) {
  playerChoice = RockPaperScissorEnum[e.target.id];
  console.log("Player:" + playerChoice);
  computerPlay();
};

// make random computer pick
function computerPlay() {
  cpuChoice = Math.floor(Math.random() * 3);
  console.log("Computer: " + cpuChoice);
  evaluateRound();
}

function evaluateRound() {
  console.log("Evaluating round");
  let isGameOver = false;
  let roundMessage = "";
  if (playerChoice === RockPaperScissorEnum.Rock && cpuChoice === RockPaperScissorEnum.Scissor) {
    isGameOver = increaseHumanScore();
    roundMessage = "You win! Rock beats Scissor";
  }
  else if (playerChoice === RockPaperScissorEnum.Rock && cpuChoice === RockPaperScissorEnum.Paper) {
    isGameOver = increaseCpuScore();
    roundMessage = "You lose Paper beats Rock";
  }
  else if (playerChoice === RockPaperScissorEnum.Paper && cpuChoice === RockPaperScissorEnum.Scissor) {
    isGameOver = increaseCpuScore();
    roundMessage = "You lose Scissor beats Paper";
  }
  else if (playerChoice === RockPaperScissorEnum.Scissor && cpuChoice === RockPaperScissorEnum.Rock) {
    isGameOver = increaseCpuScore();
    roundMessage = "You lose Rock beats Scissor";
  }
  else if (cpuChoice === RockPaperScissorEnum.Rock && playerChoice === RockPaperScissorEnum.Paper) {
    isGameOver = increaseHumanScore();
    roundMessage = "You win! Paper beats Rock";
  }
  else if (cpuChoice === RockPaperScissorEnum.Paper && playerChoice === RockPaperScissorEnum.Scissor) {
    isGameOver = increaseHumanScore();
    roundMessage = "You win! Scissor beats Paper";
  }
  else {
    roundMessage = "You tie Bummer";
  }

  if(!isGameOver) {
    document.querySelector(".message").innerHTML = roundMessage;
    console.log("Current Score:\nPlayer: " + playerScore + "\nComputer: " + cpuScore);
  }
}


// increase player score or Player victory
function increaseHumanScore() {
  playerScore += 1;
  if (playerScore < 5) {
    document.querySelector("#playerScore").innerHTML = playerScore;
    return false;
  }
  else {
    playerVictory();
    return true;
  }
}

// increase CPU score or CPU victory
function increaseCpuScore() {
  cpuScore += 1;
  if (cpuScore < 5) {
    document.querySelector("#cpuScore").innerHTML = cpuScore;
    return false;
  }
  else {
    gameOver();
    return true;
  }
}

function gameOver() {
  if (confirm("Game Over. Cpu Wins " + cpuScore + " - " + playerScore)) {
    window.location.reload(); // Shouldn't reload the page to restart the game
  }
}

function playerVictory() {
  if (confirm("You Win!!!!! " + playerScore + " - " + cpuScore)) {
    window.location.reload(); // Shouldn't reload the page to restart the game
  }
}

// let rps = [
// 	"Rock",
//   "Paper",
//   "Scissor"
// ];
// let playerHuman = document.querySelector("#playerScore");
// let playerCpu = document.querySelector("#cpuScore");
// let message = document.querySelector(".message");
// let cpuScore = 0;
// let playerScore = 0;
// let squares = document.querySelector("#container");
// let rock = document.getElementById("Rock").addEventListener("click", playerTurn);
// let scissor = document.getElementById("Scissor").addEventListener("click", playerTurn);
// let paper = document.getElementById("Paper").addEventListener("click", playerTurn);


// // function playerChooses(e){
// //   if (e.target !== e.currentTarget){
// //     let clickedItem = String(e.target.id);
// //     console.log(clickedItem);
// //   }
// //   e.stopPropagation();
// //   playGame();
// // };

// function playerTurn(e){
//   return String(e.target.id);
// }

// // make random computer pick
// function computerPlay(){
//   return rps[Math.floor(Math.random() * rps.length)];
// }

// // squares.addEventListener("click", playerChooses);
// // let playerTurn = {  
// //   Rock: Rock.onclick = (e) => String(e.target.id),
// //   Paper: Paper.onclick = (e) => String(e.target.id),
// //   Scissor: Scissor.onclick = (e) => String(e.target.id)
// // }

// function playGame(){
//   let computerTurn = computerPlay();
//   console.log(computerTurn);
//   if (playerScore === 5){
//     playerVictory();
//   }
//   else if (cpuScore === 5){
//     gameOver();
//   }
//   else {
//     if (playerTurn === "Rock" && computerTurn === "Scissor"){
//       increaseHumanScore();
//       message.innerHTML = "You win! Rock beats Scissor";
//     }
//     else if (playerTurn === "Rock" && computerTurn === "Paper"){
//       increaseCpuScore();
//       message.innerHTML = "You lose. Paper beats Rock";
//     }
//     else if (playerTurn === "Paper" && computerTurn === "Scissor"){
//       increaseCpuScore();
//       message.innerHTML = "You lose. Scissor beats Paper";
//     }
//     else if (playerTurn === "Scissor" && computerTurn === "Rock"){
//       increaseCpuScore();
//       message.innerHTML = "You lose. Rock beats Scissor";
//     } 
//     else if (computerTurn === "Rock" && playerTurn === "Paper"){
//       increaseHumanScore();
//       message.innerHTML = "You win! Paper beats Rock";
//     }
//     else if (computerTurn === "Paper" && playerTurn === "Scissor"){
//       increaseHumanScore();
//       message.innerHTML = "You win! Scissor beats Paper";
//     }
//     else {
//       message.innerHTML = "You tie Bummer";
//     }
//   }
// }

// // increase player score or Player victory
// function increaseHumanScore(){
// 	if (playerScore !== 5){
//     playerHuman.setAttribute("type", "number");
//     let score1 = playerHuman.innerHTML;
//     score1++;
//     playerHuman.innerHTML = score1;
//     playerScore += 1;
//   }
//   else {
//     playerVictory();
//   } 
// }

// // increase CPU score or CPU victory
// function increaseCpuScore(){
//   if (cpuScore !== 5){
//     playerCpu.setAttribute("type", "number");
//     let score2 = playerCpu.innerHTML;
//     score2++;
//     playerCpu.innerHTML = score2;
//     cpuScore += 1;
//   }
//   else {
//     gameOver();
//   }
// }

// function gameOver(){
//   if(confirm("Game Over. Cpu Wins " + cpuScore + " - " + playerScore)){
//     window.location.reload();
//   }
// }

// function playerVictory(){
//   if(confirm("You Win!!!!! " + playerScore + " - " + cpuScore)){
//     window.location.reload();
//   }
// }


// function playGame(){
// 	pickButton();
// 	gameRules();
// }

// function resetGame(){

// }

// let squares = String(squares);



// function playRound(){
// 		if (choiceButton === "Rock" && computerPlay === "Scissor"){
// 			increaseHumanScore();
// 			message.innerHTML = "You win! Rock beats Scissor";
// 		}
// 		else if (choiceButton === "Rock" && computerPlay === "Paper"){
// 			increaseCpuScore();
// 			message.innerHTML = "You lose. Paper beats Rock";
// 		}
// 		else if (choiceButton === "Paper" && computerPlay === "Scissor"){
// 			increaseCpuScore();
// 			message.innerHTML = "You lose. Scissor beats Paper";
// 		}
// 		else if (choiceButton === "Scissor" && computerPlay === "Rock"){
// 			increaseCpuScore();
// 			message.innerHTML = "You lose. Rock beats Scissor";
// 		}	
// 		else if (computerPlay === "Rock" && choiceButton === "Paper"){
// 			increaseHumanScore();
// 			message.innerHTML = "You win! Paper beats Rock";
// 		}
// 		else if (computerPlay === "Paper" && choiceButton === "Scissor"){
// 			increaseHumanScore();
// 			message.innerHTML = "You win! Scissor beats Paper";
// 		}
// 		else {
// 			message.innerHTML = "You tie Bummer";
// 		}
// 	}

// playerChoice.addEventListener("click", doSomething, false);
 
// function doSomething(e) {
//     if (e.target !== e.currentTarget) {
//         var clickedItem = e.target.id;
//         alert("Hello " + clickedItem);
//     }
//     e.stopPropagation();
// }


// function playerSelect(){
// 	for(let i = 0; i < squares.length; i++){
// 		// add click listeners to buttons
// 		squares[i].addEventListener("click", function(){
// 			console.log(squares[i]);
// 		});
// 	}
// }


// playRound();

// function game() {
//   for(let i=0; i <= cpuWin || i <= playerWin; i++){
//   	playerSelect();
//   	let cpuSelect = (function computerPlay(){
//     return rps[Math.floor(Math.random() * rps.length)];
//     })();
//   	// console.log(playRound(playerSelect,cpuSelect));
//     if (playerWin) {
//   	  message.innerHTML = "Game Over. You are the winner!";
//     }
//     else if (cpuWin) {
//   	  message.innerHTML = "Game Over. You lose";
//     }
//     else {
//   	  playRound(playerSelect,cpuSelect);
//     }
//   }
//   cpuScore > playerScore ? console.log("CPU wins. " + cpuScore + " - " + playerScore) : "";
//   playerScore > cpuScore ? console.log ("You win!!! " + playerScore + " - " + cpuScore + " Hooray!") : "";
//   playerScore === cpuScore ? console.log("Game ends in a tie.") : "";
// }

// game();

