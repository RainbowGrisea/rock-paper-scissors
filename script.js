// player chooses from the 3 options (rock/paper/scissors)
// the computer chooses as well
// the two choices are compared
// rock beats scissors, scissors beats paper, paper beats rock

// the computer makes his choice
function getComputerChoice() {
    let compChoice;
    compChoice = Math.floor(Math.random() * 3 + 1);
    console.log(compChoice);
    switch (compChoice) {
        case 1:
            compChoice = 'Rock'
            break;
        case 2:
            compChoice = 'Paper'
            break;
        default:
            compChoice = 'Scissors'
            break;
    }
    console.log(compChoice);
}

// make the user's choice case insensitive

let firstLetter = usersChoice.slice(0, 1).toUpperCase();
console.log(firstLetter);
let restLetters = usersChoice.slice(1).toLowerCase();
console.log(restLetters);
usersChoice = firstLetter + restLetters;
console.log(usersChoice);

// compare choices
function playARound(usersChoice, getComputerChoice) {
    if (usersChoice === compChoice) {
        console.log('It\'s a tie!');
    }
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
playARound(usersChoice, compChoice);

function play() {

}