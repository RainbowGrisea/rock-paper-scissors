// player chooses from the 3 options (rock/paper/scissors)
// the computer chooses as well
// the two choices are compared
// rock beats scissors, scissors beats paper, paper beats rock

// Return the computers choice
function getComputerChoice() {
    Math.floor(Math.random() * 3 + 1);
    switch (Math.floor(Math.random() * 3 + 1)) {
        case 1:
            return 'Rock'
            break;
        case 2:
            return 'Paper'
            break;
        default:
            return 'Scissors'
            break;
    }
}

// Play a round of rock-paper-scissors
function playARound() {
    compChoice = getComputerChoice();
    let usersChoice;
    let incorrectInput = true;
    // Exclude incorrect inputs
    while (incorrectInput === true) {
        usersChoice = prompt('Rock, paper or scissors?');
        // Make the user's choice case insensitive
        let firstLetter = usersChoice.slice(0, 1).toUpperCase();
        let restLetters = usersChoice.slice(1).toLowerCase();
        usersChoice = firstLetter + restLetters;
        if (usersChoice === 'Rock' || usersChoice === 'Paper' || usersChoice === 'Scissors') {
            incorrectInput = false;
        } else {
            console.log('Incorrect input! \nPlease make a proper choice!');
        };
    };

    switch (true) {
        case usersChoice === compChoice:
            return ('It\'s a tie!');
            break;
        case usersChoice === 'Rock' && compChoice === 'Scissors':
            return ('You win! Rock beats Scissors!');
            break;
        case usersChoice === 'Rock' && compChoice === 'Paper':
            return ('You lose! Paper beats Rock!');
            break;
        case usersChoice === 'Paper' && compChoice === 'Rock':
            return ('You win! Paper beats Rock!');
            break;
        case usersChoice === 'Paper' && compChoice === 'Scissors':
            return ('You lose! Scissors beats Paper');
            break;
        case usersChoice === 'Scissors' && compChoice === 'Rock':
            return ('You lose! Rock beats Scissors!');
            break;
        case usersChoice === 'Scissors' && compChoice === 'Paper':
            return ('You win! Scissors beats Paper');
            break;
    }
}

// Play a game of 5 rock-paper-scissors
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    const regex = /You win!/i;

    // Run until 5 games are won (ties don't count) 
    for (let i = 0; i < 5; i++) {
        let result = playARound();
        console.log(result);
        switch (true) {
            case result === 'It\'s a tie!':
                i--;
                break;
            case regex.test(result):
                playerPoints++;
                break;
            default:
                computerPoints++;
        }
    }
    // Who wins?
    playerPoints > computerPoints ?
        console.log('You WIN! \nYour points: ' + playerPoints + '\nComputer points: ' + computerPoints) :
        // console.log('You LOSE! \nYour points: ' + playerPoints + '\nComputer points: ' + computerPoints);
}