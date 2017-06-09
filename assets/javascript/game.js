
$(document).ready(function(){

var magic = getRandomIntInclusive();

var $magicNumber = $("#magicNumber").append(magic);

var score = 0;

var $losses = 0;

$("#losses").text($losses);

var $wins = 0;
$("#wins").text($wins);

console.log ($losses);

var $totalScore = $("#totalScore").text(score);
var numberOptions = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];



//this function generates random numbers for each of the images
var randomNumber1 = Math.floor(Math.random()*numberOptions.length);
var randomNumber2 = Math.floor(Math.random()*numberOptions.length);
var randomNumber3 = Math.floor(Math.random()*numberOptions.length);
var randomNumber4 = Math.floor(Math.random()*numberOptions.length);


// This function randomly generates the Magic Number

function getRandomIntInclusive(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  };

// This function resets the score and Magic Numbers after the player wins or losses

  function reset (){
    var magic = getRandomIntInclusive();
    score = 0;
    alert("Time for a new Game!");
  }


    $("#crystalOne").click(function(){
      score = score + randomNumber1;
      var $totalScore = $("#totalScore").text(score);

      if (magic == score) {
        $wins++;
        $("#wins").text($wins);
        alert("You've Won the Recess Game!");
      }

      else if (score >= magic) {
        $losses++;
        $("#losses").text($losses);
        alert("You lose!!");
      }
      });

      $("#crystalTwo").click(function(){
        score = score + randomNumber2;
        var $totalScore = $("#totalScore").text(score);

        if (magic == score) {
          $wins++;
          $("#wins").text($wins);
          alert("You've Won the Recess Game!");
        }

        else if (score >= magic) {
          $losses++;
          $("#losses").text($losses);
          alert("You lose!!");
        }
      });

    $("#crystalThree").click(function(){
      score = score + randomNumber3;
      var $totalScore = $("#totalScore").text(score);

      if (magic == score) {
        $wins++;
        $("#wins").text($wins);
        alert("You've Won the Recess Game!");
      }

      else if (score >= magic) {
        $losses++;
        $("#losses").text($losses);
        alert("You lose!!");

      }
      });

    $("#crystalFour").click(function(){
      score = score + randomNumber4;
      var $totalScore = $("#totalScore").text(score);

      if (magic == score) {
        $wins++;
        $("#wins").text($wins);
        alert("You've Won the Recess Game!");
      }

      else if (score >= magic) {
        $losses++;
        $("#losses").text($losses);
        alert("You lose!!");
        reset ();

      }
      });



});



// function clicky(){
//   $("#crystalInput").click(function(){
//
// function randomizer (crystalInput) {
//
//   score = score + randomNumber;
//   var $totalScore = $("#totalScore").text(score);
// }
// });
//
// randomizer(crystalOne);
