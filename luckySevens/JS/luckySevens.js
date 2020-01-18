function clearErrors() {
    for (var loopCounter = 0;
         loopCounter < document.forms["betForm"].elements.length;
         loopCounter++) {
        if (document.forms["betForm"].elements[loopCounter]
            .parentElement.className.indexOf("has-") != -1) {

            document.forms["betForm"].elements[loopCounter]
                .parentElement.className = "input-group";
        }
    }
}

function rollDice(){
    return Math.floor((Math.random() * 6) + 1);
}

function playGame(startingBet){
    var numRounds = 0;
    var maximumMoney = 0;
    var maxMoneyNumRound = 0;
    while(startingBet > 0){
        var diceSum = rollDice() + rollDice();
        if(diceSum === 7){
            startingBet += 4;
        } else {
            startingBet -= 1;
        }

        numRounds ++;

        if(startingBet > maximumMoney){
            maximumMoney = startingBet;
            //assuming that round 0 does not count as a round as that is before the game
            maxMoneyNumRound = numRounds;
        }

        /* Output for debugging each round:
        console.log("Current round: " + numRounds)
        console.log("Current amount of money: " + startingBet)
        console.log("Total dice roll: " + diceSum)
        console.log("Maximum amount of money: " + maximumMoney)
        console.log("Round number of max money: " + maxMoneyNumRound)
        */
    }

    var values = [numRounds, maximumMoney, maxMoneyNumRound];
    return values;
}

function validateItems() {
    clearErrors();
    var startingBet = document.forms["betForm"]["betInput"].value;
    if(startingBet <= 0){
        alert("Starting bet must be greater than 0.")
        document.forms["betForm"]["betInput"]
            .parentElement.className = "input-group has-error";
        document.forms["betForm"]["betInput"].focus();
        return false;
    }

    var values = playGame(startingBet);
    /* Output for debugging and making sure values are returned from game:
    console.log("Starting bet: " + startingBet);
    console.log("Total rolls: " + values[0]);
    console.log("Highest Amount Won: " + values[1]);
    console.log("Roll Count at Highest Amount Won: " + values[2]);
     */

    document.getElementById("startBetRes").innerText = startingBet;
    document.getElementById("totalRollsRes").innerText = values[0];
    document.getElementById("maxMoneyRes").innerText = values[1];
    document.getElementById("maxMoneyRollRes").innerText = values[2];
    return false;
}