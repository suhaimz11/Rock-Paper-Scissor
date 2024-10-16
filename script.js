const choices = ['rock', 'paper', 'scissors'];
let userScore = 0;
let computerScore = 0;

const resultMessage = document.getElementById('resultMessage');
const computerChoiceMessage = document.getElementById('computerChoiceMessage'); // Element for computer choice
const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resetButton = document.getElementById('resetButton'); // Reset button

const userGesture = document.getElementById('userGesture');
const computerGesture = document.getElementById('computerGesture');

document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
resetButton.addEventListener('click', resetScores); // Event listener for reset button

function playGame(userChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = '';

    // Show user gesture
    userGesture.classList.add('show');
    userGesture.innerText = getEmoji(userChoice); // Show user's choice

    // Delay to show user gesture before computer gesture
    setTimeout(() => {
        computerGesture.classList.add('show');
        computerGesture.innerText = getEmoji(computerChoice); // Show computer's choice

        // Determine result
        if (userChoice === computerChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            result = 'You win!';
            userScore++;
        } else {
            result = 'You lose!';
            computerScore++;
        }

        // Update scores in the DOM
        userScoreDisplay.innerText = userScore;
        computerScoreDisplay.innerText = computerScore;

        // Show results
        computerChoiceMessage.innerText = `Computer chose: ${computerChoice}`; // Show computer's choice
        resultMessage.innerText = `You chose ${userChoice}. ${result}`; // Show result
    }, 1500); // Delay before showing the computer gesture and result
}

// Function to get emoji based on choice
function getEmoji(choice) {
    switch (choice) {
        case 'rock':
            return '🪨';
        case 'paper':
            return '📄';
        case 'scissors':
            return '✂️';
        default:
            return '';
    }
}

// Function to reset scores
function resetScores() {
    userScore = 0; // Reset user score
    computerScore = 0; // Reset computer score
    userScoreDisplay.innerText = userScore; // Update display
    computerScoreDisplay.innerText = computerScore; // Update display
    resultMessage.innerText = ''; // Clear result message
    computerChoiceMessage.innerText = ''; // Clear computer choice message
    userGesture.classList.remove('show'); // Hide user gesture
    computerGesture.classList.remove('show'); // Hide computer gesture
    userGesture.innerText = ''; // Clear user gesture
    computerGesture.innerText = ''; // Clear computer gesture
}







