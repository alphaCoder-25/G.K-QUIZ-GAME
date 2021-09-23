var readlineSync = require('readline-sync')
const chalk = require('chalk');

const userName = readlineSync.question(chalk.yellow("What is your Name? "));

console.log("\nWelcome " + chalk.yellow.bold(userName, "! ") + "to an amazing 'General Knowledge Quiz' on " +  chalk.bgGreen.underline.bold("\n\nCOUNTRIES AND THEIR NATIONAL SPORTS "));
console.log(chalk.greenBright.italic.bold("\nTime to test your basic G.k. \n Let's Begin.!!"));
console.log("      ----------------------    ");
let score = 0;


function play(question, answer){
  const userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green.bold("You are absolutely correct!"))
    score = score + 1;
  } else {
    console.log(chalk.redBright.bold("Oops! You are wrong!"))
    console.log(chalk.magenta("The correct answer is: "), chalk.green(answer));
  } 
  console.log("Your current score is: " + chalk.yellow(score));
  console.log("------------------------------");
} 

const questions = [{
  question: chalk.yellowBright("Q.1)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("INDIA? ")+
  "\nA.)"+ chalk.cyan("Cricket")+
  "\nB.)"+ chalk.cyan("Hockey")+
  "\nC.)"+ chalk.cyan("Kabaddi")+
  "\nD.)"+ chalk.cyan("Football")+
   chalk.yellowBright("\nAns:- "),
  answer: "Hockey"  
},{
  question:chalk.yellowBright("Q.2)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("JAPAN? ")+
  "\nA.)"+ chalk.cyan("Baseball")+
  "\nB.)"+ chalk.cyan("Jujitsu (Martial Arts) ")+
  "\nC.)"+ chalk.cyan("Sumo Wrestling")+
  "\nD.)"+ chalk.cyan("Ice Hockey")+
   chalk.yellowBright("\nAns:- "),
  answer: "Sumo Wrestling"
},{
  question:chalk.yellowBright("Q.3)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("NEW ZEALAND? ")+
  "\nA.)"+ chalk.cyan("Rugby")+
  "\nB.)"+ chalk.cyan("Basketball")+
  "\nC.)"+ chalk.cyan("Golf")+
  "\nD.)"+ chalk.cyan("Cricket")+
   chalk.yellowBright("\nAns:- "),
  answer: "Rugby"
},{
  question:chalk.yellowBright("Q.4)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("SPAIN? ")+
  "\nA.)"+ chalk.cyan("Formula One")+
  "\nB.)"+ chalk.cyan("Tennis")+
  "\nC.)"+ chalk.cyan("Bull Fight")+
  "\nD.)"+ chalk.cyan("Boxing")+
   chalk.yellowBright("\nAns:- "),
  answer: "Bull Fight"
},{
  question:chalk.yellowBright("Q.5)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("INDONESIA? ")+
  "\nA.)"+ chalk.cyan("Badminton")+
  "\nB.)"+ chalk.cyan("Wrestling")+
  "\nC.)"+ chalk.cyan("Karate")+
  "\nD.)"+ chalk.cyan("Volley Ball")+
   chalk.yellowBright("\nAns:- "),
  answer: "Badminton"
},{
  question: chalk.yellowBright("Q.6)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("UNITED STATES OF AMERICA? ")+
  "\nA.)"+ chalk.cyan("Golf")+
  "\nB.)"+ chalk.cyan("Baseball")+
  "\nC.)"+ chalk.cyan("Basketball")+
  "\nD.)"+ chalk.cyan("Tennis")+
   chalk.yellowBright("\nAns:- "),
  answer: "Baseball"  
},{
  question: chalk.yellowBright("Q.7)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("GERMANY? ")+
  "\nA.)"+ chalk.cyan("Baseball")+
  "\nB.)"+ chalk.cyan("Ice Hockey")+
  "\nC.)"+ chalk.cyan("Skiing")+
  "\nD.)"+ chalk.cyan("Football")+
   chalk.yellowBright("\nAns:- "),
  answer: "Football"  
},{
  question: chalk.yellowBright("Q.8)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("CHINA? ")+
  "\nA.)"+ chalk.cyan("Badminton")+
  "\nB.)"+ chalk.cyan("Judo")+
  "\nC.)"+ chalk.cyan("Taekwondo")+
  "\nD.)"+ chalk.cyan("Table Tennis")+
   chalk.yellowBright("\nAns:- "),
  answer: "Table Tennis"  
},{
  question: chalk.yellowBright("Q.9)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("RUSSIA? ")+
  "\nA.)"+ chalk.cyan("Chess")+
  "\nB.)"+ chalk.cyan("Bandy")+
  "\nC.)"+ chalk.cyan("Gymnastics")+
  "\nD.)"+ chalk.cyan("Sketting")+
   chalk.yellowBright("\nAns:- "),
  answer: "Bandy"  
},{
  question: chalk.yellowBright("Q.10)") + chalk.cyan("What is the national Sports of ")+ chalk.yellowBright.bold("CANADA? ")+
  "\nA.)"+ chalk.cyan("Ice Hockey")+
  "\nB.)"+ chalk.cyan("Golf")+
  "\nC.)"+ chalk.cyan("Archery")+
  "\nD.)"+ chalk.cyan("Skiing")+
   chalk.yellowBright("\nAns:- "),
  answer: "Ice Hockey"  
},];

for ( let i=0; i<questions.length; i++){
  const currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log(chalk.magenta.bold("\nYour"), chalk.yellowBright("Final Score!"), chalk.magenta.bold("in my Quiz is: "), chalk.yellowBright(score), chalk.yellowBright("/ 10"));
console.log(chalk.yellow.underline.bold("\nHighscorers: "));

const firstHighScore = {
  name: "Anurudra:",
  score: "10"
}
const secondHighScore = {
  name: "Manav: ",
  score: "9"
}

const highScore = [firstHighScore, secondHighScore]
for(let i=0; i<highScore.length; i++){
  const currentHighScore = highScore[i];
  console.log(chalk.cyan.bold(currentHighScore.name), chalk.green(currentHighScore.score))
}

if(score>=firstHighScore.score){
  console.log(chalk.yellowBright("\nCongratulations!! You are a new highscorer."));
  console.log(chalk.blueBright("Send me the screenshot of your score, I will update your name on my Quiz scoreboard."))
} else if(score>=secondHighScore.score){
  console.log(chalk.yellowBright("\nWell Done! You scored the second best highscore"), chalk.blueBright("\nWe will update your name in scorecard soon."));
} else {
  console.log(chalk.redBright("\nSorry!! You coudn't beat the highscores","\nBetter Luck Next Time..."))
}

console.log(chalk.green.bold.italic("\nThanks for Playing.!"));
