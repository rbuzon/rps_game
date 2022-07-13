function computerPlay() {
    
    // random number 0 - 2
    let computerChoice = Math.floor((Math.random()*3));
    
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

//    playerchoice = capitalize(playerchoice)

    if (playerchoice == "Rock"){
        switch(computerchoice) {
            case "Rock":
                console.log("It's a tie this round.")
                result = "Its a tie this round"
            break;
            case "Scissors":
                console.log("You Win this round! " + playerchoice + " beats " + computerchoice)
                result = ("You Win this round! " + playerchoice + " beats " + computerchoice)
                playerwin += 1
            break;
            case "Paper":
                console.log("You Lose this round! " + computerchoice + " beats " + playerchoice)
                result = ("You Lose this round! " + computerchoice + " beats " + playerchoice)
                computerwin += 1
        }
    }
    else if (playerchoice == "Paper"){
        switch(computerchoice) {
            case "Paper":
                console.log("It's a tie this round")
                result = "Its a tie this round"
            break;
            case "Rock":
                console.log("You Win this round! " + playerchoice + " beats " + computerchoice)
                result = ("You Win this round! " + playerchoice + " beats " + computerchoice)
                playerwin += 1

            break;
            case "Scissors":
                console.log("You Lose this round! " + computerchoice + " beats " + playerchoice)
                result = ("You Lose this round! " + computerchoice + " beats " + playerchoice)
                computerwin += 1

        }
    }
    else if (playerchoice == "Scissors"){
        switch(computerchoice) {
            case "Scissors":
                console.log("It's a tie this round")
                result = "Its a tie this round"

            break;
            case "Paper":
                console.log("You Win this round! " + playerchoice + " beats " + computerchoice)
                result = ("You Win this round! " + playerchoice + " beats " + computerchoice)
                playerwin += 1

            break;
            case "Rock":
                console.log("You Lose this round! " + computerchoice + " beats " + playerchoice)
                result = ("You Lose this round! " + computerchoice + " beats " + playerchoice)
                computerwin += 1

        }
    }

}   

function playGame(){

    for (let i = 0; i<5; i++){

            playRound(playerPlay(),computerPlay())
            gamesplayed += 1
            console.log("TOTAL AFTER ROUND "+ gamesplayed)
            console.log("player wins: " + playerwin)
            console.log("computer wins: " + computerwin)

    }

    if (playerwin == computerwin){
        console.log("The game ends in a draw!")
    } 
    else if (playerwin > computerwin){
        console.log("You win the game!")
    } 
    else if (computerwin >playerwin){
        console.log("You lose the game")
    }

}

var playerwin = 0;
var computerwin = 0;
var gamesplayed = 0;
var result = "Good Luck"

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click',(e)=>{
        makeSelection(e)
    })
})

function makeSelection(e){
    playerSelection = e.target.className
    playRound(playerSelection,computerPlay())

    gamesplayed += 1

    resultsdisplay.textContent = result

    playerscore.textContent = playerwin
    computerscore.textContent = computerwin

    gamesplayeddisplay = "GAMES PLAYED : " + gamesplayed
    gamecount.textContent = gamesplayeddisplay


}

const resultsdisplay = document.querySelector('.results')
const playerscore = document.querySelector('.playerscore')
const computerscore = document.querySelector('.computerscore')
const gamecount = document.querySelector('.gamenumber')


// resultsdisplay.textContent = "it changes at least"