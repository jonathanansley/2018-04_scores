// score mgt system

// If 10th frame is strike, then 2 extra throws.
const rawScore01 = 'X-X-X-X-X-X-X-X-X-X-XX';

// If 10th frame is an open frame (not a spare or strike), then no extra throws.
const rawScore02 = '45-54-36-27-09-63-81-18-90-72';

// If 10th frame is spare, then 1 extra throw.
const rawScore03 = '5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5';

const rawScore04 = '45-54-36-27-09-63-81-18-90-7/-5';

const rawScore05 = '9/-54-36-20-09-63-11-18-90-7/-5';

var pointsPass1 = [];

var pointsPass2 = [];

var splitScore = [];

var totalScoreOfGame = 0;

//
function calculateScore(array)
{
  console.log(' ');
  console.log('This is the calculateScore function.');
  console.log(' ');

  splitArray(array);

  pass1(splitScore);

  pass2(splitScore);

} // end of function calculateScore()

  // The scores in a frame are separated by a hyphen a.k.a. dash "-".
  // Use that as a delimiting character.
  // Create a new array with each frame's score
  // broken up into an index of the array.
  function splitArray(stringArgument)
  {
    console.log(' ');
    console.log('This is the splitArray function.');

    splitScore = stringArgument.split('-');

    // Show it to user.
    console.log('The splitScore array is: '+ splitScore );
    console.log(' ');

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

      pointsPass1[i] = throwNumber01 + throwNumber02;

      console.log('pointsPass1[i] = throwNumber01 + throwNumber02 = ' + pointsPass1[i]);

    } // end of function openFrame
    
    console.log('The splitScore array is: '+ splitScore );
    console.log('The pointsPass1 array is: '+ pointsPass1 );
    console.log(' ');

    // Start at 11th or 10th frame and work down toward 1st frame.
    for (var i = 0; i < array.length; i++)
    {
      console.log(' ');
      console.log( 'i = ' + i );
      console.log( 'inside for loop. array[i] = ' + array[i] );

      // If frame was a strike
      if (array[i] === 'X')
      {
        console.log('');
        console.log( 'i = ' + i );
        console.log('if - array[i] === x, call strike function');
        strike(i);
      }

      // If frame was a spare
      else if (array[i].includes('/'))
      {
        console.log('');
        console.log( 'i = ' + i );
        console.log('else if - array[i].includes /, call spare function');
        spare(i);
      }

      // If frame is an open frame
      else
      {
        console.log('');
        console.log('else - call openFrame function');
        openFrame(array[i], i);
      }

    } // end of for loop
    
    console.log('The pointsPass1 array is: '+ pointsPass1 );
    console.log(' ');
    
  } // end of pass1 function


  function pass2(array)
  {
    // 
    for (var i = 0; i < array.length; i--)
    {
      console.log(' ');
      console.log( 'inside for loop. array[i] = ' + array[i] );

      // If frame was a strike
      if (array[i] === 'X')
      {
        console.log('');
        console.log( 'i = ' + i );
        console.log('if - array[i] === X');
        pointsPass2[i] = pointsPass1[i] + pointsPass1[i+1] + pointsPass1[i+2];
        console.log(' ');    
        console.log('The pointsPass2 array is: '+ pointsPass2);
      }

      // If frame was a spare
      else if (array[i].includes('/'))
      {
        console.log('');
        console.log( 'i = ' + i );
        console.log('else if - array[i].includes /');
        pointsPass2[i] = pointsPass1[i] + pointsPass1[i+1];
        console.log(' ');   
        console.log('The pointsPass2 array is: '+ pointsPass2);
      }

      // If frame is an open frame
      else
      {
        console.log('');
        console.log( 'i = ' + i );
        console.log('else open frame');
        pointsPass2[i] = pointsPass1[i];
        console.log(' ');    
        console.log('The pointsPass2 array is: '+ pointsPass2);
      }

    } // end of for loop

  } // end of pass2 function

// Call functions
// Calculate points from raw score.
calculateScore(rawScore02);
