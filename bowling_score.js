// score mgt system

// Require packages
const inquirer = require("inquirer");

//
// functions
//

// Get score of bowling game.
function askForInputString
{
  //
  // function askForInputString() {
  //   console.log('This is the askForInputString() function.');
  //   inquirer
  //     .prompt(
  //       [
  //
  //         {
  //           inputString: "item",
  //           type: "input",
  //           message: "Please enter the score of the bowling game. e.g. X-X-X-X-X-X-X-X-X-X-XX would be a perfect game."
  //         }
  //
  //     ]
  //
  //     )
    //   .then(function(answer) {
    //     console.log('ID of the product you would like to buy answer.input: ' + answer);
    //   }
    // );
  // }; // end of function askForInputString()
}
inquirer.prompt([

  {
    type: "input",
    name: "rawScore",
    message: "Please enter the score of the bowling game. e.g. X-X-X-X-X-X-X-X-X-X-XX would be a perfect game.",
  }

  // {
  //     message: "What's your first name?",
  //     type: "input",
  //     name: "firstName"
  // }
  //

]).then(function(user) {
    console.log("The rawScore is: " + user.rawScore);
  //   console.log("");
    //   // console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind ")
  // }

}); // end of function getScore()

// storeInArray();

//var inputString = input[0]

// var inputString = ['X-X-X-X-X-X-X-X-X-X-XX'];

///////////////

// convertInputString(); - convert to numbers

// var scores = [ 30, 30, 30, 30, 30, 30, 30, 30, 30, 30 ]

/////////

//
// calculatePointsPerFrame();
//
// case X = 30;
//
// case / =

////////////
//
// calculateTotalScore(); - add numbers
//
//
// var x = myFunction(4, 3);    // Function is called, return value will end up in x
//
// function myFunction(a, b) {
//     return a * b;            // Function returns the product of a and b
// }
//
// arrayLength = scores.length;
//
// for (var i = 0; i < scores.length; i++) {
//   scores[i]
// }
//
// score = 0;
//
// loop through scores array
//
// {
// var score = 10 + 10 + 10;
// }
//
// ///////////////
//
// function displayScore()
// {
//   console.log('This is the displayScore function.');
//   console.log( 'The score is: ' + score);
// } // end of function displayScore()

/////////
//
//
//
// function askUserToContinue() {
//     console.log('This is the askUserToContinue function.');
//     console.log( 'Would you like to calculate another score?' );
// } // end of function askUserToContinue()

// askForInputString();

// displayScore();

/////

//
// Input score:
// User types in text string.
//
// take text input and convert it to score.
// Store scores in an array?
// add array to a total score.

/////////////////////

// Call functions

// askForInputString();

// storeInArray();

//askUserToContinue
