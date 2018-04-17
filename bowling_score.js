// score mgt system

// Require packages
// const inquirer = require("inquirer");

//var rawScoreString = '';

var rawScoreString1 = 'X-X-X-X-X-X-X-X-X-X-XX';

var rawScoreString2 = '45-54-36-27-09-63-81-18-90-72';

var rawScoreString3 = '5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5';

var rawScoreString4 = '45-54-36-27-09-63-81-18-90-7/-5';

var rawScoreString5 = '9/-54-36-20-09-63-11-18-90-7/-5';

//
// functions
//

// Convert array of scores to numbers if appropriate
function convertToNumber(stringArgument)
{
  var frameScoresArray = stringArgument.split("-");
  //
   // Show it to user.
    console.log('The frameScoresArray is: '+ frameScoresArray);

  var frameScoresArray = frameScoresArray.map(_=>_|0);
  console.log ('Convert array of frame scores to numbers if appropriate: ' + frameScoresArray);
}

// Calculate points from raw score.
// take text input and convert it to score.
// Store scores in an array?
// add array to a total score.
// function calculateScore(stringArgument)
// {
//   // console.log('This is the beginning of calculateScore function.');
//   // console.log('The rawScoreString variable = ' + rawScoreString1);
//
//   // The scores in a frame are separated by a hyphen a.k.a. dash "-".
//   // Use that as a delimiting character.
//   // Create a new array with each frame's score
//   // broken up into an index of the array.
//   var frameScoresArray = stringArgument.split("-");
//
//   // Show it to user.
//   console.log(stringArgument.split("-"));
//
//   var totalScoreOfGame = 0;
//
//   var frameScore = 0;
//
//   for (var i = 0; i < frameScoresArray.length; i++)
//   {
//     frameScore  = frameScore + frameScoresArray[i];
//     console.log('The frameScore = ' + frameScore);
//     console.log('The totalScoreOfGame while in the for loop = ' + totalScoreOfGame);
//
//
//     switch (new Date() {
//
//       // Strike (‘X’): the bowler knocks down all 10 pins on the first throw.
//       // The frame is over early.
//       // The score for the frame is 10 plus the total pins knocked down
//       // on the next two throws.
//         case strike:
//             frameScoresArray[i] = 'X';
//             frameScore  = 10 + next 2 throws;
//             break;
//
//         // Spare (‘/’): the bowler knocks down all 10 pins using two throws.
//         // The score for the frame is 10 plus the number of pins knocked down
//         // on the next throw.
//         case spare:
//             frameScoresArray[i+1] = '/';
//             break;
//
//         // Open frame: the bowler knocks down less than 10 pins with his two throws.
//         // The score for the frame is the total number of pins knocked down.
//         case openFrame:
//             day = "Tuesday";
//             break;
//     }
//
//   } // end of for loop
//
//   return totalScoreOfGame;
//
//   console.log('The totalScoreOfGame after for loop = ' + totalScoreOfGame);
//
//   // console.log('This is the end of calculateScore function.');
// } // end of function calculateScore()

//      console.log('The calculatedScore = ' + calculatedScore);


// The points are broken up by fram.
// loop through new array of scores from each frame.
// total points for each frame.




// Get score of bowling game.
// Ask user for score.
// User types in text string.
// function getScore()
//   {
//     console.log('This is the beginning of getScore() function.');
//     inquirer.prompt([
//       {
//         type: "input",
//         name: "rawScore",
//         message: "Enter score of bowling game: ",
//         //message: "Please enter the score of the bowling game. e.g. X-X-X-X-X-X-X-X-X-X-XX would be a perfect game.",
//       }
//
//     ]).then(function(user) {
//         console.log("The rawScore is: " + user.rawScore);
// //        console.log('This is the end of getScore() function.');
//       rawScoreString = user.rawScore;
//       console.log("The rawScoreString is: " + rawScoreString);
//     })
//
//
//    console.log('This is the end of getScore() function.');
//   }; // end of function getScore()
//
//
//
//
//
//
//
//
//
//
//
// // Call functions
//
// // Ask user for score.
// getScore();


convertToNumber(rawScoreString2);


//
// // Calculate points from raw score.
//calculateScore(rawScoreString1);

//calculateScore(rawScoreString2);
//
// calculateScore(rawScoreString3);
//
// calculateScore(rawScoreString4);
//
// calculateScore(rawScoreString5);
//
// //displayScore();
//
