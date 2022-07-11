function computerPlay() {
    
    // random number 0 - 2
    let computerChoice = Math.floor((Math.random()*100))%3;
    
    // assign to choice
    if (computerChoice == 0) { 
        return "Rock"
    } else if (computerChoice == 1){
        return "Paper"
    } else {
        return "Scissors"
    }

};

function playerPlay(){
    return prompt("ROCK PAPER or SCISSORS?")
}

function capitalize(string) {
    let newstring = []
    for (let i =0; i < string.length;i++){
        (i == 0) ? (newstring.push(string[i].toUpperCase())) : (newstring.push(string[i].toLowerCase()));
    }
    return newstring.join("");
}


function playRound(playerchoice, computerchoice){

    playerchoice = capitalize(playerchoice)

    if (playerchoice == "Rock"){
        switch(computerchoice) {
            case "Rock":
                return "It's a tie"
            break;
            case "Scissors":
                return ("You Win! " + playerchoice + "beats " + computerchoice)
            break;
            case "Paper":
                return ("You Lose! " + computerchoice + " beats " + playerchoice)
        }
    }
    else if (playerchoice == "Paper"){
        switch(computerchoice) {
            case "Paper":
                return "It's a tie"
            break;
            case "Rock":
                return ("You Win! " + playerchoice + "beats " + computerchoice)
            break;
            case "Scissors":
                return ("You Lose! " + computerchoice + " beats " + playerchoice)
        }
    }
    else if (playerchoice == "Scissors"){
        switch(computerchoice) {
            case "Scissors":
                return"It's a tie"
            break;
            case "Paper":
                return ("You Win! " + playerchoice + "beats " + computerchoice)
            break;
            case "Rock":
                return ("You Lose! " + computerchoice + " beats " + playerchoice)
        }
    }

}   

console.log(playRound(playerPlay(),computerPlay()))