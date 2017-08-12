//identify variables
var cpuRandomNumber = '';

var win = 0;
var loss = 0;

var redCrystal = 0;
var blueCrystal = 0;
var yellowCrystal = 0;
var greenCrystal = 0;

//console.log(); 

//enter gameNumber generator
var gameNumber = Math.floor(Math.random() * (120 - 19 + 1) + 19);
cpuRandomNumber = gameNumber + cpuRandomNumber;
console.log(cpuRandomNumber);
$('#cpuRandomNumber').html(gameNumber);
// click me on crystals objects

var clickCrystals = document.getElementById('crystalButtons');
console.log(crystalButtons);

//Crystals

$('.redCrystal').click(function() {

    var redCrystalNumber = Math.floor(Math.random() * 12) + 1;
    redCrystal = redCrystalNumber + redCrystal;
    console.log(redCrystal);
});

$('.blueCrystal').click(function() {

    var blueCrystalNumber = Math.floor(Math.random() * 12) + 1;
    blueCrystal = blueCrystalNumber + blueCrystal;
    console.log(blueCrystal);
});

$('.yellowCrystal').click(function() {

    var yellowCrystalNumber = Math.floor(Math.random() * 12) + 1;
    yellowCrystal = yellowCrystalNumber + yellowCrystal;
    console.log(yellowCrystal);
});

$('.greenCrystal').click(function() {

    var greenCrystalNumber = Math.floor(Math.random() * 12) + 1;
    greenCrystal = greenCrystalNumber + greenCrystal;
    console.log(greenCrystal);
});

// var playerScore = function() {
//     redCrystal + blueCrystal + greenCrystal + yellowCrystal
//     console.log(playerScore());
// };