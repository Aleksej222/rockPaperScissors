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