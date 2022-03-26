// function resetGame () {
//     const reset =document.quary 
// }




// // -- Old code --

// const OPTIONS = ['rock', 'paper', 'scissors'];
// let selection = OPTIONS[Math.floor(Math.random() * 3)];
// const images = document.querySelectorAll('image');
// const click = document.querySelectorAll('image');
// images.forEach(click => click.addEventListener('click'));

// function selector(e) {

// }


// function gameRound(){
//     let compChoice = selection;
//     let playerChoice = window.addEventListener()

//     switch(playerChoice) {
//     case compChoice: {
//         return 'tie';
//     }
//     case "paper": {
//         switch(compChoice){
//             case "rock":{
//                 return 'win';
//             }
//             case "scissors":{
//                 return 'lose';
//             }
//         }
//         break;
//     }
//     case "rock": {
//         switch(compChoice){
//             case "scissors":{
//                 return 'win';
//             }
//             case "paper":{
//                 return 'lose';
//             }
//         }
//         break;
//     }
//     case "scissors": {
//         switch(compChoice){
//             case "rock":{
//                 return 'lose';
//             }
//             case "paper":{
//                 return 'win';
//             }
//         }
//         break;
//     }
//     default: {
//         console.log("incorrect Entry")
//         break;
//         }
//     }
// }

// function game() {
//     let outcome; 
//     let userScore = 0;
//     let opponenScore = 0;

//     for (let i = 0; i < 5; i++) {
//         outcome = gameRound();

//         if (outcome === 'win') {
//             userScore++;
//         } else if (outcome === 'lose'){
//             opponenScore++
//         }
//     }
//     if (userScore === opponenScore) {
//         console.log('tie game');
//     } else if (userScore > opponenScore) {
//         console.log('you win') 
//     } else if (userScore < opponenScore) {
//         console.log('you lose')
//     } 
// }

// game();

// // -- end old code --