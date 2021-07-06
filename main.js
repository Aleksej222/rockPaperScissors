if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
}

else {
    ready();
}

function ready() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    // calling the playRound function
    const cards = document.getElementsByClassName("cards");
    [...cards].forEach(card => {
        card.addEventListener('click', playRound);
    })

    // function for creating computer choice
    function computerSelection() {
        const choices = ["rock", "paper", "scissors"];
        let computerSelection = choices[Math.floor(Math.random() * choices.length)];
        return computerSelection;
    }

    // function for playing a round whe na player clicks the card
    function playRound(e) {
        // getting selections of the player and the computer
        let playerChoice = e.target.parentElement.id;
        let computerChoice = computerSelection();

        // adding selections to the screen
        let playerChoiceText = document.getElementsByClassName("player-choice")[0];
        let computerChoiceText = document.getElementsByClassName("computer-choice")[0];
        playerChoiceText.innerText = playerChoice;
        computerChoiceText.innerText = computerChoice;

        // setting the scores of the player and the computer
        let playerScore = document.getElementById("player-result");
        let computerScore = document.getElementById("computer-result");
        
        // This can probably be done much simpler, but because I'm a huge noob, we do it this way, with bunch of if statements... :(
        if (scorePlayer == 5) 
        {
            let images = document.getElementsByClassName("card-img");
            [...images].forEach(image => {
                image.style.display = 'none';
            })
            let msg = document.getElementsByClassName("player-won")[0];
            msg.style.display = 'flex';
        }

        else if (scoreComputer == 5) {
            let images = document.getElementsByClassName("card-img");
            [...images].forEach(image => {
                image.style.display = 'none';
            })
            let msg = document.getElementsByClassName("computer-won")[0];
            msg.style.display = 'flex';
        }

        else if (playerChoice == computerChoice) {
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "rock" && computerChoice == "scissors") {
            scorePlayer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "rock" && computerChoice == "paper") {
            scoreComputer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "paper" && computerChoice == "scissors") {
            scoreComputer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "paper" && computerChoice == "rock") {
            scorePlayer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "scissors" && computerChoice == "rock") {
            scoreComputer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
        else if (playerChoice == "scissors" && computerChoice == "paper") {
            scorePlayer++;
            playerScore.innerText = scorePlayer;
            computerScore.innerText = scoreComputer;
        }
    }
}

/*
let playerScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('#choices .choice');
var scorePlayer = document.querySelector('.score .player-result')
var scoreComputer = document.querySelector('.score .computer-result');

var playerPick = document.querySelector('.score .player');
var computerPick = document.querySelector('.score .computer');

const img = document.querySelector('#choices');    


choices.forEach(choice =>{
   choice.addEventListener('click', e =>{
       if (playerScore >= 5 || computerScore >= 5) {
         
           return;
         }
       var playerChoice = e.target.id;
       playRound(playerChoice);
      });  
  });    

function play()
{
   window.location.reload();
}

function computerChoice(computerSelection)
   {
       const choices = ["rock", "paper", "scissors"];
       computerSelection = choices[Math.floor(Math.random() * choices.length)];
       return computerSelection;
   }

function playRound(playerSelection,computerSelection)
{
   computerSelection = computerChoice();

   playerPick.textContent = playerSelection;
   computerPick.textContent = computerSelection;

       if (playerSelection === computerSelection)
       {
          scorePlayer.textContent = playerScore;
          scoreComputer.textContent = computerScore;

       }
       else if(playerSelection == "rock" && computerSelection == "scissors")
       {
           playerScore ++;              
           scorePlayer.textContent = playerScore;
           scoreComputer.textContent = computerScore;
       }
       else if(playerSelection == "paper" && computerSelection == "rock")
       {
           playerScore ++;
           scorePlayer.textContent = playerScore;
           scoreComputer.textContent = computerScore;
       }
       else if(playerSelection == "scissors" && computerSelection == "paper")
       {
           playerScore ++;  
           scorePlayer.textContent = playerScore;
           scoreComputer.textContent = computerScore;
       }
       else{
           computerScore ++;
           scorePlayer.textContent = playerScore;
           scoreComputer.textContent = computerScore;
       }  
    if (playerScore >= 5 && computerScore < 5) {
       img.style.marginBottom = "170px";
       img.textContent = "Congrats! You won!";
         }
    else if (playerScore < 5 && computerScore >= 5) {
       img.style.marginBottom = "170px";
       img.textContent = "Computer won :( Better luck next time!";
         }
}  
*/