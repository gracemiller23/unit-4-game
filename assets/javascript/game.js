
var wins = 0;
var losses = 0;
var matchNum = 0;
var guessNum = 0;
var zeus = 0;
var athena = 0;
var hera = 0;
var ares = 0;
var instructions = "Try to match the random number by clicking Zeus, Hera, Athena, or Ares.";

function resetGame() {
   
    hera = Math.floor((Math.random() * 12) + 1);
    zeus = Math.floor((Math.random() * 12) + 1);
    athena = Math.floor((Math.random() * 12) + 1);
    ares = Math.floor((Math.random() * 12) + 1);
    matchNum = Math.floor((Math.random() * 100) + 19);
    guessNum = 0;
    $("span.guessNumTally").text(guessNum);
    $("div.messages").text(instructions);
    $("span.randNum").text(matchNum);
    console.log(hera);
    console.log(zeus);
    console.log(athena);
    console.log(ares);
}

function play(god) {
    guessNum = guessNum + god;
};

function checkState() {
    $("span.guessNumTally").text(guessNum);
    if (guessNum === matchNum) {
        wins++;
        $("span.numOfWins").text(wins);
       alert("You win!");
       resetGame();

    } else if (guessNum > matchNum){
        losses++;
    $("span.numOfLosses").text(losses);
   alert("You lose!");
        resetGame();
    };

};

$(document).ready(function () {
    resetGame();
        $("section.gods").on("click", "div.zeus", function () {
           
            play(zeus);
            checkState();

        }).on("click", "div.athena", function () {
            
            play(athena);
            checkState();
        
        }).on("click", "div.hera", function () {
            
            play(hera);
            checkState();

        }).on("click", "div.ares", function () {
                
            play(ares);
            checkState();
           
        });
        
});
