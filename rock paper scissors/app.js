let playerPoint = 0;
let computerPoint = 0;

const options = ["hammer", "paper", "scissors"];

function computerPlay() {
    // Returns a random integer from 0 to 2:
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

function win() {
    playerPoint += 1
    document.getElementById("score1").innerHTML = playerPoint;
}

function lose() {
    computerPoint += 1
    document.getElementById("score2").innerHTML = computerPoint;
}


function singleRound(playerSelection, computerSelection) {
   let playerSelect = playerSelection.toLowerCase();
   let computerSelect = computerSelection.toLowerCase();
   if (playerSelect === computerSelect) {
       return "The match is tied!"
   } else if (playerSelect === "hammer"){
        if (computerSelect === "scissors"){
            win()
            return "You won! Hammer beats scissors"
        } else {
            lose()
            return "You lose! Paper beats hammer"
        }
    } else if (playerSelect === "scissors"){
        if (computerSelect === "paper"){
            win()
            return "You won! Scissors beats paper"
        } else {
            lose()
            return "You lose! Hammer beats scissors"
        }
    } else if (playerSelect === "paper"){
        if (computerSelect === "hammer"){
            win()
            return "You won! Paper beats hammer"
        } else {
            lose()
            return "You lose! Scissors beats paper"
        }
    }
   
}

document.querySelectorAll('.button').forEach(button => {
    button.addEventListener('click', event => {
      document.querySelector('.report').innerHTML = singleRound(event.target.id, computerPlay());
      if (playerPoint === 5){
        document.querySelector('.result').innerHTML = "Congratulations! You have defeated the machine!"
        document.getElementById("replay").style.visibility = "visible"
        document.querySelectorAll('.button').forEach(button => button.disabled = true)
      } 
      if (computerPoint === 5){
        document.querySelector('.result').innerHTML = "Bad news! The machine has beaten you! Try again"
        document.getElementById("replay").style.visibility = "visible"
        document.querySelectorAll('.button').forEach(button => button.disabled = true)
      }
    })
  })

function replay() {
    playerPoint = 0;
    computerPoint = 0;
    document.querySelectorAll('.button').forEach(button => button.disabled = false)
    document.getElementById("score1").innerHTML = playerPoint;
    document.getElementById("score2").innerHTML = computerPoint;
    document.querySelector('.report').innerHTML = ""
    document.querySelector('.result').innerHTML = ""
    document.getElementById("replay").style.visibility = "hidden"
}