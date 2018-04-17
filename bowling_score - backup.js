// score mgt system

// Require packages
const inquirer = require("inquirer");

var rawScoreString = '';

//
// functions
//

// Get score of bowling game.
// Ask user for score.
// User types in text string.
function getScore()
  {
    console.log('This is the beginning of getScore() function.');
    inquirer.prompt([
      {
        type: "input",
        name: "rawScore",
        message: "Enter score of bowling game: ",
        //message: "Please enter the score of the bowling game. e.g. X-X-X-X-X-X-X-X-X-X-XX would be a perfect game.",
      }

    ]).then(function(user) {
        console.log("The rawScore is: " + user.rawScore);
//        console.log('This is the end of getScore() function.');
      rawScoreString = user.rawScore;
      console.log("The rawScoreString is: " + rawScoreString);
    })


    // Calculate points from raw score.
    // take text input and convert it to score.
    // Store scores in an array?
    // add array to a total score.
    var calculatedScore = function (rawScoreString)
      {
        console.log('This is the beginning of calculateScore function.');
        console.log('The rawScoreString variable = ' + rawScoreString);
        console.log('This is the beginning of calculateScore() function.');

            for (var i = 0; i < rawScoreString.length; i++) {
              var x  = x + rawScoreString[i];
              console.log('The calculatedScore = ' + calculatedScore);
            } // end of for loop
        return x;

        console.log('This is the end of calculateScore function.');
      }; // end of function calculateScore()

      console.log('The calculatedScore = ' + calculatedScore);

   console.log('This is the end of getScore() function.');
  }; // end of function getScore()









// Ask User if they want to continue.
// function displayScore()
//   {
//     console.log('This is the beginning of displayScore function.');
//     console.log('The hard coded score is X.');
//     //console.log("The rawScore is: " + user.rawScore);
//     console.log("The rawScoreString is: " + rawScoreString);
//     console.log('This is the end of displayScore function.');
//   }; // end of function displayScore()








// Ask User if they want to continue.
// function askUserToContinue()
//   {
//     console.log('This is the beginning of askUserToContinue function.');
//
//     console.log('This is the end of askUserToContinue function.');
//   }; // end of function askUserToContinue()



// Call functions

// Ask user for score.
getScore();

// Calculate points from raw score.
// calculateScore();

// storeInArray();
//displayScore();

//askUserToContinue();
