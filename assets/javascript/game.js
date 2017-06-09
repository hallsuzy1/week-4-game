
$(document).ready(function(){

var magic = getRandomIntInclusive();

var $magicNumber = $("#magicNumber").append(magic);

var score = 0;

var numberOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

var randomNumber = Math.floor(Math.random()*numberOptions.length);

var $totalScore = $("#totalScore").text(score);



function getRandomIntInclusive(min, max) {
    min = Math.ceil(19);
    max = Math.floor(120);
    return Math.floor(Math.random() * (120 - 19 + 1)) + 19;
  };


    $("#crystalOne").click(function(){
      score = score + randomNumber;
      var $totalScore = $("#totalScore").text(score);

      });

      $("#crystalTwo").click(function(){
        score = score + randomNumber;
        var $totalScore = $("#totalScore").text(score);

      });

    $("#crystalThree").click(function(){
      score = score + randomNumber;
      var $totalScore = $("#totalScore").text(score);

      });

    $("#crystalFour").click(function(){
      score = score + randomNumber;
      var $totalScore = $("#totalScore").text(score);

      });



});
