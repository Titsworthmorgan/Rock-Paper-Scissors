let computerSelection = Math.floor(Math.random() * 3)
let playerChoice;
let outcome;
let userScore = 0;
let opponentScore = 0;

function play(choice){
     playerChoice = choice;
     outcome = gameRound();
     game();
}

function gameRound(){
    let compChoice = computerSelection;
    

    switch(playerChoice) {
    case compChoice: {
        return 'tie';
    }
    case 1: {
        switch(compChoice){
            case 0:{
                return 'win';
            }
            case 2:{
                return 'lose';
            }
        }
    }
    case 0: {
        switch(compChoice){
            case 2:{
                return 'win';
            }
            case 1:{
                return 'lose';
            }
        }
    }
    case 2: {
        switch(compChoice){
            case 0:{
                return 'lose';
            }
            case 1:{
                return 'win';
            }
        }
    }
    default: {
        console.log("incorrect Entry")
        break;
        }
    }
}

function game(){
        if (outcome === 'win'){
            userScore++;
        } else if (outcome === 'lose'){
            opponentScore++
        }if (userScore == 5) {
        console.log('user wins');
        } else if (opponentScore == 5){
        console.log('computer wins');
    } 
}

function resetGame(){
    let userScore = 0;
    let opponentScore = 0;
}
