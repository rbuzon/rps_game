function computerPlay() {
    
    // random number 0 - 2
    let computerChoice = Math.floor((Math.random()*100))%3;
    
    // assign to choice
    if (computerChoice == 0) { 
        return "rock"
    } else if (computerChoice == 1){
        return "paper"
    } else {
        return "scissors"
    }

};

console.log(computerPlay());