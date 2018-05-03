// score mgt system

// Require packages
// const inquirer = require("inquirer");

// If 10th frame is strike, then 2 extra throws.
var rawScore01 = 'X-X-X-X-X-X-X-X-X-X-XX';

// If 10th frame is an open frame (not a spare or strike), then no extra throws.
var rawScore02 = '45-54-36-27-09-63-81-18-90-72';

// If 10th frame is spare, then 1 extra throw.
var rawScore03 = '5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5';

var rawScore04 = '45-54-36-27-09-63-81-18-90-7/-5';

var rawScore05 = '9/-54-36-20-09-63-11-18-90-7/-5';

var pointsPass1 = [];

var pointsPass2 = [];

//
function calculateScore(array)
{
  console.log('This is the calculateScore function.');

  var splitScore = [];

  var totalScoreOfGame = 0;

  // The scores in a frame are separated by a hyphen a.k.a. dash "-".
  // Use that as a delimiting character.
  // Create a new array with each frame's score
  // broken up into an index of the array.
  function splitArray(stringArgument)
  {
    console.log('This is the splitArray function.');

    splitScore = stringArgument.split('-');

    // Show it to user.
    console.log('The splitScore array is: '+ splitScore );

    // validateLength(splitScore);

    // return splitScore;
  } // end of splitArray function

  function pass1(array)
  {
    // frameScore  = 10 + next 2 throws;
    function strike(indexOfArray)
    {
      console.log(' ');
      console.log('This is the strike function.');
      console.log('Frame ' + (Number(i) + 1) + ' was a strike.');
      pointsPass1[i] = 10;
    } // end of function strike

    // Spare (‘/’): the bowler knocks down all 10 pins using two throws.
    // The score for the frame is 10 plus the number of pins knocked down
    // on the next throw.
    function spare(indexOfArray)
    {
      console.log(' ');
      console.log('This is the spare function.');
      // console.log('Frame ' + (i + 1) + ' was a spare.');
      pointsPass1[i] = 10;
    } // end of function spare

    // Open frame: the bowler knocks down less than 10 pins with their two throws.
    // The score for the frame is the total number of pins knocked down.
    function openFrame(arrayIndex, index)
    {
      console.log(' ');
      console.log('This is the openFrame function.');
      console.log('Frame ' + (Number(i) + 1) + ' was an open frame.');

      // Add the scores of the two throws of the frame.
      var openFrameScore = splitScore[i];

      var throwNumber01 = 0;
      var throwNumber02 = 0;

      console.log('openFrameScore = ' + openFrameScore);

      throwNumber01 = Number(openFrameScore[0]);
      console.log('throwNumber01 = ' + throwNumber01);

      throwNumber02 = Number(openFrameScore[1]);
      console.log('throwNumber02 = ' + throwNumber02);

      console.log('totalScoreOfGame = ' + totalScoreOfGame);

      pointsPass1[i] = throwNumber01 + throwNumber02;

      console.log('pointsPass1[i] = throwNumber01 + throwNumber02 = ' + pointsPass1[i]);

    } // end of function openFrame

    // Start at 11th or 10th frame and work down toward 1st frame.
    for (var i = 0; i < splitScore.length; i--)
    {
      console.log(' ');
      console.log( 'inside for loop. splitScore[i] = ' + splitScore[i] );

      // If frame was a strike
      if (splitScore[i] === 'X')
      {
        strike(i);
      }

      // If frame was a spare
      else if (splitScore[i].includes('/'))
      {
        spare(i);
      }

      // If frame is an open frame
      else
      {
        openFrame(splitScore[i], i);
      }

    } // end of for loop
  } // end of pass1 function

  function pass2(array)
  {
    // Start at 11th or 10th frame and work down toward 1st frame.
    for (var i = 0; i < splitScore.length; i--)
    {
      console.log(' ');
      console.log( 'inside for loop. splitScore[i] = ' + splitScore[i] );

      // If frame was a strike
      if (splitScore[i] === 'X')
      {
        pointsPass2[i] = pointsPass1[i] + pointsPass1[i+1] + pointsPass1[i+2];
      }

      // If frame was a spare
      else if (splitScore[i].includes('/'))
      {
        pointsPass2[i] = pointsPass1[i] + pointsPass1[i+1];
      }

      // If frame is an open frame
      else
      {
        pointsPass2[i] = pointsPass1[i];
      }

    } // end of for loop

  } // end of pass2 function

  splitArray(array);

  pass1(splitScore);

  // pass2(splitScore);

}; // end of function calculateScore()

// The points are broken up by frame.
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

// Call functions
//
// Ask user for score.
// getScore();

//
// Calculate points from raw score.
//calculateScore(rawScore01);

calculateScore(rawScore05);
//
// calculateScore(rawScore03);
//
// calculateScore(rawScore04);
//
// calculateScore(rawScore05);
//
//displayScore();
//
