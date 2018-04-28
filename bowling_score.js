// score mgt system

// Require packages
// const inquirer = require("inquirer");

//var rawScore = '';

// If 10th frame is strike, then 2 extra throws.
var rawScore01 = 'X-X-X-X-X-X-X-X-X-X-XX';

// If 10th frame is an open frame (not a spare or strike), then no extra throws.
var rawScore02 = '45-54-36-27-09-63-81-18-90-72';

// If 10th frame is spare, then 1 extra throw.
var rawScore03 = '5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5';

var rawScore04 = '45-54-36-27-09-63-81-18-90-7/-5';

var rawScore05 = '9/-54-36-20-09-63-11-18-90-7/-5';

//
function calculateScore(array)
{
  console.log('This is the calculateScore function.');

  var newArray = splitArray(array);

  var frameScoresArray = '';

  var totalScoreOfGame = 0;

  function validateLength(array)
  {
    // If 11 frames
    // calculate 11th.
    // Then calculate starting and 10 and work down to 1.
    if (array.length === 11)
    {
      frameEleven(array);
    } // end of if

    // if only 10 frames, you do not need to worry about calculating 11th.
    else if (array.length === 10)
    {
      framesOneThroughTen(array);
    } // end of else if

    else
    {
      console.log('There is an error with the score. It needs to be either 10 or 11 frames.');
      break;
    } // end of else
  }

  // The scores in a frame are separated by a hyphen a.k.a. dash "-".
  // Use that as a delimiting character.
  // Create a new array with each frame's score
  // broken up into an index of the array.
  function splitArray(stringArgument)
  {
    console.log('This is the splitArray function.');

    splitScore = stringArgument.split('-');

    // Show it to user.
    console.log('The split array is: '+ splitScore );

    return splitScore;
  }

  // pseudocode
  // Frames 1-10 convert to number and add them

  // loop inside frames 1-10
  // How long is array?
  //   If 1 - verify X convert to 10 and add. Also add next 2 throws.
  //   If 2 - If 2nd position is /, then 10. Add next 1 throw.
  //   Else just add 2 numbers.
  function framesOneThroughTen(stringArgument)
  {
    console.log('This is the framesOneThroughTen function.');

    // Strike (‘X’): the bowler knocks down all 10 pins on the first throw.
    // The frame is over early.
    // The score for the frame is 10 plus the total pins knocked down
    // on the next 2 throws.
    // frameScore  = 10 + next 2 throws;
    function strike(indexOfArray)
    {
      console.log('This is the strike function.');
      console.log('Frame ' + (Number(i) + 1) + ' was a strike.');
      frameScoresArray[i] = 10
    } // end of function strike

    // Spare (‘/’): the bowler knocks down all 10 pins using two throws.
    // The score for the frame is 10 plus the number of pins knocked down
    // on the next throw.
    function spare(indexOfArray)
    {
      console.log('This is the spare function.');
      console.log('Frame ' + (Number(i) + 1) + ' was a spare.');
      totalScoreOfGame = totalScoreOfGame + 10;
    } // end of function spare

    // Open frame: the bowler knocks down less than 10 pins with his two throws.
    // The score for the frame is the total number of pins knocked down.
    function openFrame(arrayIndex, index)
    {
      console.log('This is the openFrame function.');
      console.log('Frame ' + (Number(i) + 1) + ' was an open frame.');

      // Add the scores of the two throws of the frame.
      var openFrameScore = newArray[i];

      var throwNumber01 = 0;
      var throwNumber02 = 0;

      console.log('openFrameScore = ' + openFrameScore);

      throwNumber01 = Number(openFrameScore[0]);
      console.log('throwNumber01 = ' + throwNumber01);

      throwNumber02 = Number(openFrameScore[1]);
      console.log('throwNumber02 = ' + throwNumber02);

      console.log('totalScoreOfGame = ' + totalScoreOfGame);

      totalScoreOfGame = totalScoreOfGame + throwNumber01 + throwNumber02;

      console.log('totalScoreOfGame = totalScoreOfGame + throw1Number + throw2Number = ' + totalScoreOfGame);
    } // end of function openFrame

      // Start at 10th frame and work toward 1st frame.
      for (var i = 9; i > 0; i--)
      {
        console.log('inside for loop. newArray[' + i + ']' = + newArray[i]);

        // If frame was a strike
        if (newArray[i] === 'X' || 'x')
        {
          strike(i);
        }

        // If frame was a spare
        else if (newArray[i].includes('/'))
        {
          spare(i);
        }

        // If frame is an open frame
        else
        {
          openFrame(newArray[i], i);
        }

      } // end of for loop

  } // end of function framesOneThroughTen

  // if 10th is strike
  //   Frame 11 - add 2 throws and add them
  // if 10th is spare
  //   Frame 11 - add one throw and add it
  // 11th frame
  function frameEleven (stringArgument)
  {
    console.log('This is the frameEleven function.');
    //
    // var frame11Score = 0;
    //
    // frame11Score  = 10 + next 2 throws;
    // function strike(indexOfArray)
    // {
    //   console.log('This is the strike function.');
    //   console.log('Frame ' + (Number(i) + 1) + ' was a strike.');
    //   totalScoreOfGame = totalScoreOfGame + 10;
    // } // end of function strike
    //
    // // Spare (‘/’): the bowler knocks down all 10 pins using two throws.
    // // The score for the frame is 10 plus the number of pins knocked down
    // // on the next throw.
    // function spare(indexOfArray)
    // {
    //   console.log('This is the spare function.');
    //   console.log('Frame ' + (Number(i) + 1) + ' was a spare.');
    //   totalScoreOfGame = totalScoreOfGame + 10;
    // } // end of function spare
    //
    // // Open frame: the bowler knocks down less than 10 pins with his two throws.
    // // The score for the frame is the total number of pins knocked down.
    // function openFrame(arrayIndex, index)
    // {
    //   console.log('This is the openFrame function.');
    //   console.log('Frame ' + (Number(i) + 1) + ' was an open frame.');
    //
    //   // Add the scores of the two throws of the frame.
    //   var openFrameScore = newArray[i];
    //
    //.......
    //
    //   console.log('openFrameScore = ' + openFrameScore);
    //
    //   throw1String = openFrameScore[0];
    //   console.log('throw1String = ' + throw1String);
    //   throw1Number = Number(throw1String);
    //
    //   throw2String = openFrameScore[1];
    //   console.log('throw2String = ' + throw2String);
    //   throw2Number = Number(throw2String);
    //
    //   console.log('totalScoreOfGame = ' + totalScoreOfGame);
    //
    //   totalScoreOfGame = totalScoreOfGame + throw1Number + throw2Number;
    //
    //   console.log('totalScoreOfGame = totalScoreOfGame + throw1Number + throw2Number = ' + totalScoreOfGame);
    // } // end of function openFrame

  } // end of function frameEleven

  framesOneThroughTen(stringArgument);

  frameEleven(splitStringText[10]);
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
