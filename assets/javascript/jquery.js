//identify variables
var cpuRandomNumber = '';

var win = 0;
var loss = 0;

var allCrystal = 0;


//console.log(); 

//enter gameNumber generator
var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
cpuRandomNumber = gameNumber + cpuRandomNumber;
console.log(cpuRandomNumber);
$('#cpuRandomNumber').html(gameNumber);
// click me on crystals objects
var playerScore = 0;

var clickCrystals = document.getElementById('crystalButtons');
console.log(crystalButtons);

//Crystals

$('#crystalButtons').click(function() {

    var CrystalNumber = Math.floor(Math.random() * 12-1) + 1;
    allCrystal = CrystalNumber + allCrystal;
    playerScore += allCrystal;
    console.log(playerScore);
    if (playerScore === gameNumber){
    	alert('You Win!');
    	//$('#winCol').html('<p>win</p>');
    	win = win + 1;
    } else if (playerScore >= gameNumber){
    	alert('You Lose!');
    	// $('#loseCol').html('<p>loss</p>');    	
    	loss = loss + 1;
    }
});

