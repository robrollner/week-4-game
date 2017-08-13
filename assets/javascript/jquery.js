$(document).ready(function() {

    //identify variables

    var cpuRandomNumber = 0;
    var winCounter = 0;
    var lossCounter = 0;
    var allCrystal = 0;



    //enter gameNumber generator

    var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
    cpuRandomNumber = gameNumber + cpuRandomNumber;
    console.log(cpuRandomNumber);
    $('#cpuRandomNumber').html(gameNumber);


    // click me on crystals objects

    var playerScore = 0;
    $('#score').html(playerScore);
    $('#winCol').html('<p>Wins: </p>' + winCounter++);
    $('#loseCol').html('<p>Loss: </p>' + lossCounter++);
    var clickCrystals = document.getElementById('crystalButtons');
    console.log('Current value', crystalButtons);

    //Crystals

    $('#crystalButtons').click(function() {

        var CrystalNumber = Math.floor(Math.random() * 12) + 1;
        allCrystal = CrystalNumber + allCrystal;
        playerScore += allCrystal;
        console.log(playerScore);
        $('#score').html(playerScore);
        if (playerScore === cpuRandomNumber) {
            $('#winCol').html('<p>Wins: </p>' + winCounter++);
            alert('You Win!');
            gameRestart();
        } else if (playerScore >= cpuRandomNumber) {
            $('#loseCol').html('<p>Loss: </p>' + lossCounter++);
            alert('You Lose!');
            gameRestart();
        }

        //Game ReStart
        function gameRestart() {
            var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
            cpuRandomNumber = gameNumber + cpuRandomNumber;
            console.log(cpuRandomNumber);
            playerScore = 0;
            allCrystal = 0;
            $('#score').html(playerScore);
            $('#cpuRandomNumber').html(gameNumber);
            console.log(gameNumber + " cpuRandomNumber");
            console.log(playerScore + " playerScore");

        }

    });

});