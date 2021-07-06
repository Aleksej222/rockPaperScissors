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