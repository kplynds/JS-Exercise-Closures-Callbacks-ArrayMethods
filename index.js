// ⭐️ Example Challenge START ⭐️
 
/**
* ### Challenge `processFirstItem`
*
* @instructions
* Implement a higher-order function called `processFirstItem`.
* It takes two arguments:
* @param stringList an array of strings.
* @param callback function that takes a string as its argument.
* @returns the result of invoking `callback` with the FIRST element in `stringList`.
*
* Example of usage of this higher-order function:
* Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
* should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
 }
  
 // ⭐️ Example Challenge END ⭐️
  
  
 ///// M V P ///////
  
 /* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 *
 * 1. What is the difference between counter1 and counter2?
 * Counter 1 defines the var inside the function and uses closure, while counter 2 defines it outside the function.
 * 2. Which of the two uses a closure? How can you tell?
 * Counter 1 uses closure. I can tell because there is a function within another function.
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better?
 * 1 would be preferable in most cases when you just want to count something. 2 would be better when you want to access the same count variable somewehre else in the project.
 */
  
 // counter1 code
 function counterMaker() {
  let count = 0;
  return function counter() {
    count++;
  }
 }
  
 const counter1 = counterMaker();
  
 // counter2 code
 let count = 0;
  
 function counter2() {
  return count++;
 }
  
  
 /* Task 2: inning()
  
 Write a function called `inning` that generates a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */
  
 function inning() {
  
    return Math.floor(Math.random() * 3);
  
 }
  
  
 /* Task 3: finalScore()
  
 Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.
  
 For example,
  
 finalScore(inning, 9) might return:
 {
  "Home": 11,
  "Away": 5,
 }
  
 */
  
 function finalScore(inning, iLength){
  
  let h = 0;
  let a = 0;
  for (let i=0; i < iLength; i++) {
    h = h + inning;
    a = a + inning;
  }
  var final = {
    "Home": h,
    "Away": a
  }
  
  return final;
 }
  
 /* Task 4:
  
 Create a function called `scoreboard` that accepts the following parameters:
  
 (1) Callback function `getInningScore`
 (2) Callback function `inning`
 (2) A number of innings
  
 and returns the score at each pont in the game, like so:
  
 1st inning: awayTeam - homeTeam
 2nd inning: awayTeam - homeTeam
 3rd inning: awayTeam - homeTeam
 4th inning: awayTeam - homeTeam
 5th inning: awayTeam - homeTeam
 6th inning: awayTeam - homeTeam
 7th inning: awayTeam - homeTeam
 8th inning: awayTeam - homeTeam
 9th inning: awayTeam - homeTeam
  
 Final Score: awayTeam - homeTeam */
  
  
  
  
 /*function getInningScore() {
  if (iLength === 1) {
    return iLength + "st" + inn + a + " - " + h;
  }
 }
  
 function scoreboard(getInningScore2, inning, iLength) {
  let h = 0;
  let a = 0;
  const inn = " inning: ";
  
  for (let i=0; i < iLength; i++) {
    h = h + inning;
    a = a + inning;
    getInningScore;
  }
 }
 console.log(scoreboard(getInningScore(),inning(), 1))*/
 
 