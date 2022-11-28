// player chooses from the 3 options (rock/paper/scissors)
// the computer chooses as well
// the two choices are compared
// rock beats scissors, scissors beats paper, paper beats rock


const playersScoreText = document.querySelector('.playersScore');
const computersScoreText = document.querySelector('.computersScore');
const result = document.querySelector('.result');
let playersScore = 0;
let computersScore = 0;

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

// Make a choice with buttons
const play = document.querySelectorAll('.playBtn');
play.forEach(btns => {
    btns.addEventListener('click', () => playARound(btns.textContent))
});

// Play a round of rock-paper-scissors
function playARound(usersChoice) {
    compChoice = getComputerChoice();
    switch (true) {
        case usersChoice === compChoice:
            result.textContent = 'It\'s a tie!';
            break;
        case usersChoice === 'Rock' && compChoice === 'Scissors':
            result.textContent = 'You win! Rock beats Scissors!';
            playersScore++;
            break;
        case usersChoice === 'Rock' && compChoice === 'Paper':
            result.textContent = 'You lose! Paper beats Rock!';
            computersScore++;
            break;
        case usersChoice === 'Paper' && compChoice === 'Rock':
            result.textContent = 'You win! Paper beats Rock!';
            playersScore++;
            break;
        case usersChoice === 'Paper' && compChoice === 'Scissors':
            result.textContent = 'You lose! Scissors beats Paper';
            computersScore++;
            break;
        case usersChoice === 'Scissors' && compChoice === 'Rock':
            result.textContent = 'You lose! Rock beats Scissors!';
            computersScore++;
            break;
        case usersChoice === 'Scissors' && compChoice === 'Paper':
            result.textContent = 'You win! Scissors beats Paper';
            playersScore++;
            break;
    };
    playersScoreText.textContent = ('You: ' + playersScore)
    computersScoreText.textContent = ('Computer: ' + computersScore)


    // Stop the game when a player reaches 5 points
    switch (true) {
        case playersScore === 5:
            result.textContent = 'You WIN!';
            break;
        case computersScore === 5:
            result.textContent = 'Computer WINS!';
            break;
    };

    if (playersScore === 5 || computersScore === 5) {
        play.forEach(btn => {
            btn.disabled = true;
        });
    }
};

// Reset the game with reset button

const resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', () => {
    playersScore = 0;
    computersScore = 0;

    play.forEach(btn => {
        btn.disabled = false;
    });
    result.textContent = 'Let the game begin!';
    playersScoreText.textContent = 'You:';
    computersScoreText.textContent = 'Computer:';
})