# improved-giggle
Challenge Project: Number Guesser

## Description
This is a Number Guesser Project created by CodeCademy. They provided the template and I used JavaScript functions to fulfill task requirements below.

## Task
1. Create a generateTarget() function. This function should return a random integer between 0 and 9.  
The purpose of this function is to be called at the start of each new round in order to generate the new secret target number.



2.  Create a compareGuesses() function. This function:  
Has three parameters representing the user (human) guess, a computer guess, and the secret target number to be guessed.
Determines which player (human or computer) wins based on which guess is closest to the target. If both players are tied, the human user should win.
Return true if the human player wins, and false if the computer player wins.
The purpose of this function is to be called each round to determine which guess is closest to the target number.



3.  Create an updateScore() function. This function:  
Has a single parameter. This parameter will be a string value representing the winner.
Increases the score variable (humanScore or computerScore) by 1 depending on the winner passed in to updateScore. The string passed in will be either 'human' or 'computer'.
Does not need to return any value.
The purpose of this function is to be used to correctly increase the winner’s score after each round.



4.  Create an advanceRound() function. This function should increase the value of currentRoundNumber by 1.  
The purpose of this function is to be used to update the round number after each round.  
After completing advanceRound(), your Number Guesser game should be fully operational. You should be able to make guesses, see your or the computer score increase correctly, move to the next round, and see the correct round displayed.


5.  Test that your code is working properly by invoking your newly written functions within script.js with sample inputs. You can delete this code once you’re convinced that everything is working as it should.

## Installation
N/A


## Usage
Step 1  
Input a number between 0 and 9

Step 2  
Click "Make a Guess" to submit your guess and see who won the round.

Step 3  
Click "Next Round" to play again.

## Screen Shot

![Screenshot 2023-09-12 000626](https://github.com/abisinchan/improved-giggle/assets/132783183/de421cc7-1235-477f-a89c-a56692299b15)

## Credits
CodeCademy - Michael Yatco

## License
MIT

## Deployed Site
https://abisinchan.github.io/improved-giggle/