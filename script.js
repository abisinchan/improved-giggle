let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Math.floor = rounds down to whole number
//Math.random() = random number between 0 and 1

//function declaration
function generateTarget(){
    return Math.floor(Math.random()*10); // random 0-9
}

//Math.abs = used to calculate the absolute value of a number. The absolute value of a number is its distance from zero on the number line, ignoring the sign (positive or negative). In other words, it returns the positive value of a number, even if the original number is negative.

function compareGuesses(userGuess, computerGuess, targetNumber) {
    const userDifference = Math.abs(targetNumber - userGuess);
    const computerDifference = Math.abs(targetNumber - computerGuess);
  
    //checking to see if guesses are equal or out of range
    if (userDifference === computerDifference || userDifference < 0 || userDifference > 9 || computerDifference < 0 || computerDifference > 9) {

      // In the case of a tie, or if either guess is out of the 0-9 range, the human player wins.
      return true;

    } else if (userDifference < computerDifference) {
      return true; // Human player wins

    } else {
      return false; // Computer player wins
    }
  }

  function updateScore(winner) {
    if (winner === "human") {
        humanScore += 1; // Increment the human score by 1
      } else {
        computerScore += 1; // Increment the computer score by 1
      }
  }

  function advanceRound() {
    currentRoundNumber++;
  }