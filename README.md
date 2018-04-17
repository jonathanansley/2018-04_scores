# 2018-04_scores
2018-04 scoring

********************************************

Problem Description
Create a program, which, given a valid sequence of throws for one game of American Ten-Pin Bowling, produces the total score for the game. ​Your code will become the core of a bowling score management system, so make sure it fully complies with the input and output requirements, and represents your best code.
Remember: We’re evaluating your design and development skills based on the code you give us. Make sure it reflects the type of code you’d write on a production software system for us.

********************************************

Take your time. Remember to refactor and write unit tests.

********************************************

*Bonus points for deploying in a Docker container.

Your input should be a string like the examples below.

********************************************

Stuff That’s Out of Scope
Here are some things that the program does not need to do​ (today):
● check for valid throws (like scores that add to 11)
● check for the correct number of throws and frames
● provide any intermediate scores – it only has to provide the final score

********************************************

The Rules
To briefly summarize the scoring for this form of bowling:

● One game of bowling is made up of ten frames.

● In each frame, the bowler has two throws to knock down all the pins.

● Possible results for a frame:
  o Strike (‘X’): the bowler knocks down all 10 pins on the first throw.
  The frame is over early. The score for the frame is 10 plus the total pins knocked down on the next two throws.

  o Spare (‘/’): the bowler knocks down all 10 pins using two throws.
  The score for the frame is 10 plus the number of pins knocked down on the next
  throw.

  o Open frame: the bowler knocks down less than 10 pins with his two throws. The score for the frame is the total number of pins knocked down.

● The game score is the total of all frame scores.

● Special rules for the 10th frame:

  o A strike in the tenth frame gives the bowler two bonus throws, to fill out the scoring formula for the last frame.
  o A spare in the tenth frame gives the bowler one bonus throw, to fill out the scoring formula for the last frame.
  o These throws count as part of the 10th frame.

  o The process does not repeat – for example, knocking down all 10 pins on a bonus
  throw does not provide any additional bonus throws.

********************************************

Examples

********************************************

Test Score 1:

Input String:
X-X-X-X-X-X-X-X-X-X-XX

Calculated As:
(10+10+10) + (10+10+10) + (10+10+10) +
(10+10+10) + (10+10+10) + (10+10+10) +
(10+10+10) + (10+10+10) + (10+10+10) +
(10+10+10)

Score:
300

********************************************

Test Score 2:

Input String:
45-54-36-27-09-63-81-18-90-72

Calculated As:
9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9

Score:
90

********************************************

Test Score 3:
5/-5/-5/-5/-5/-5/-5/-5/-5/-5/-5

Calculated as:
(10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5) + (10+5)

Score:
150

********************************************

Test Score 4:

Input String:
45-54-36-27-09-63-81-18-90-7/-5

Calculated As:
9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + 9 + (10 + 5)

Score:
96

********************************************

check to ensure scores are valid - out of scope?

********************************************

create functions:
askForInputString();
storeInArray();
convertInputString(); - convert to numbers
totalScore(); - add numbers
displayScore();
askUserToContinue();

Would you like to calculate another score?

Input score:
User types in text string.

take text input and convert it to score.
Store scores in an array?
add array to a total score.

***************************

Input score:
User types in text string.



*****************************
