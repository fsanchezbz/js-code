// console.log("piedra papel o tijera");

// let tabla = ['Pedro','Manuel','José','Angel'];

// tabla.forEach((nombre, indice) =>{

//     console.log(nombre, indice);
// });



// MI VERSION

console.log("hi");

let rock = "rock";
let paper = "paper";
let scissors = "scissors";

let optionsGame = ["rock", "paper", "scissors"];


function getRandomInt() {
  return Math.floor(Math.random()*3);
}



const startGame = () =>{

    let user = getRandomInt();
    console.log("i am the user y tengo " + optionsGame[user]);

    let computer = getRandomInt();
    console.log("i am the computer y tengo " + optionsGame[computer]);

    if (optionsGame[user] == optionsGame[computer]) {
      console.log("tied game, try again.");
    } else if (optionsGame[user] == "rock" && optionsGame[computer] == "paper") {
      console.log("COMPUTER win - paper win rock");
    } else if (optionsGame[user] == "rock" && optionsGame[computer] == "scissors") {
      console.log("USER win - rock win scissors");
    } else if (optionsGame[user] == "paper" && optionsGame[computer] == "scissors") {
      console.log("COMPUTER win - scissors win paper");
    } else if (optionsGame[user] == "paper" && optionsGame[computer] == "rock") {
      console.log("COMPUTER win - rock win paper");
    } else if (optionsGame[user] == "scissors" && optionsGame[computer] == "paper") {
      console.log("USER win - scissors win paper");
    } else if (optionsGame[user] == "scissors" && optionsGame[computer] == "rock") {
      console.log("Computer - rock win scissors");
    }

};

startGame()



//Version de CodeAdemy

// const getUserChoice = userInput => {
//   userInput = userInput.toLowerCase();
//      switch(userInput) {
//        case 'rock':
//          // code block
//          console.log('You select ROCK');
//          return userInput;
//          break;
//        case 'paper':
//          // code block
//          console.log('You select PAPER');
//          return userInput;
//          break;
//        case 'scissors':
//          // code block
//          console.log('You select SCISSORS');
//          return userInput;
//          break;
//        default:
//          // code block
//          console.log('Please have to choose rock, paper or scissors')
//      }
     
//  };
 
//  let arrayPosibilitys = ['rock','paper','scissors'];
    
//  const getComputerChoice = () => {
//        let index =  Math.floor(Math.random()*3);
//        return arrayPosibilitys[index];
//     };
    
//  //console.log(getComputerChoice());
 
//  const determineWinner = (userChoice, computerChoice) => {
//       if (userChoice === computerChoice ) {
//         return 'the Game was a tie';
//       }
//       if (userChoice === 'rock'){
//         if(computerChoice === 'paper'){
//           return "Sorry, computer won!";
//         }else{
//           return "Congratulations, you won!";
//         }
//       }
 
//      if (userChoice === "paper"){
//        if (computerChoice === 'scissors'){
//          return "Sorry, computer won!";
//        }else {
//          return "Congratulations, you won!";
//        }
//      }
 
//       if (userChoice === "scissors"){
//        if (computerChoice === 'rock'){
//          return "Sorry, computer won!";
//        }else {
//          return "Congratulations, you won!";
//        }
//      }
//  };
 
//  // console.log(determineWinner('rock','scissors'));
//  // console.log(determineWinner('paper','scissors'));
//  // console.log(determineWinner('rock','rock'));
 
//  const playGame = (userSelect) =>{
//     const userChoice = getUserChoice('userSelect');
//     const computerChoice = getComputerChoice();
//     console.log('The computer threw:'+ computerChoice);
//     console.log('You threw:'+ userChoice);
    
//     console.log(determineWinner(userChoice, computerChoice));
 
//  };
 
//  playGame('rock')
 
 