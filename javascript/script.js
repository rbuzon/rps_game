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

