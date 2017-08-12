//identify variables
var cpuRandomNumber = '';

var win = 0;
var loss = 0;

var redCrystal = '';
var blueCrystal = '';
var yellowCrystal = '';
var greenCrystal = '';

var playerScore = '';

//console.log(); 

//enter gameNumber generator
	var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
	cpuRandomNumber = gameNumber + cpuRandomNumber;
	console.log(cpuRandomNumber);

// click me on crystals objects

	var clickCrystals = document.getElementById('crystalButtons');
		console.log(crystalButtons);

	$('#crystalButtons').click(function(){

//Crystals

	var redCrystalNumber = Math.floor(Math.random() * 12) + 1;
	redCrystal = redCrystalNumber + redCrystal;
	console.log(redCrystal);

	var blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
	blueCrystal = blueCrystalNumber + blueCrystal;
	console.log(blueCrystal);

	var yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;
	yellowCrystal = yellowCrystalNumber +yellowCrystal;
	console.log(yellowCrystal);

	var greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
	greenCrystal = greenCrystalNumber +greenCrystal;
	console.log(greenCrystal);
});



