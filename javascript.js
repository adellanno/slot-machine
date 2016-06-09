$( document ).ready(function() {

  $('#purse').html(userMoney);

  $('#increase-money').click(function() {
    increaseMoney();
  });

  $('#decrease-money').click(function() {
    decreaseMoney();
  });

  $('#spin-button').click(function() {
    startSpinning();
    decreaseMoney();
  })

});

var spinCounter = 7;
var userMoney = 10;
var fruitChooser = function(fruitArray) {
  return fruitArray[Math.floor(Math.random() * fruitArray.length)];
};

var fruitSelection = ["apple", "orange", "lemon"];
var fruitOne = "";
var fruitTwo = "";
var fruitThree = "";
var myInterval = '';


function increaseMoney() {
  userMoney += 5;
  $('#purse').html(userMoney);

}

function decreaseMoney() {
  userMoney -= 1;
  $('#purse').html(userMoney);
}


function changeImages() {
  spinCounter -= 1;
  fruitOne = fruitChooser(fruitSelection);
  fruitTwo = fruitChooser(fruitSelection);
  fruitThree = fruitChooser(fruitSelection);
  document.getElementById('fruit1').src =
  'images/' + fruitOne + '.jpg';
  document.getElementById('fruit2').src =
  'images/' + fruitTwo + '.jpg';
  document.getElementById('fruit3').src =
  'images/' + fruitThree + '.jpg';
  if(spinCounter <= 0) {
    enableButton();
    clearInterval(myInterval)
    spinCounter = 7;
    checkCombination();
  }
}

function checkCombination() {
  if ((fruitOne == fruitTwo) &&
      (fruitOne == fruitThree)) {
        $('.notifications').html("You WIN!!").css("color", 'red')
        increaseMoney();
      } else {
        $('.notifications').html("You lose...try again...?").css("color", "blue")
      }
}

function startSpinning() {
  $('.notifications').html("....").css("color", "green")
  disableButton();
  myInterval = setInterval(changeImages, 100);
}

function enableButton() {
  $('#spin-button').prop('disabled', false);
}

function disableButton() {
  $('#spin-button').prop('disabled', true);
}
