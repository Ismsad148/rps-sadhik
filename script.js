const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  document.getElementById('playerChoice').textContent = playerChoice;
  document.getElementById('computerChoice').textContent = computerChoice;

  let resultText = '';
  if (playerChoice === computerChoice) {
    resultText = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    playerScore++;
    resultText = 'You win!';
  } else {
    computerScore++;
    resultText = 'Computer wins!';
  }

  document.getElementById('resultText').textContent = resultText;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
}
