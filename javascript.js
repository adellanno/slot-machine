$( document ).ready(function() {

  $('#purse').html(userMoney);

  $('#fruit1').html(fruitOne);

  $('#fruit2').html(fruitTwo);

  $('#fruit3').html(fruitThree);

  $('#increase-money').click(function() {
    increaseMoney();
  });

  $('#decrease-money').click(function() {
    decreaseMoney();
  });

  $('#spin-button').click(function() {
    spinWheel();
  })

});


var userMoney = 10;
var fruitChooser = function(fruitArray) {
  return fruitArray[Math.floor(Math.random() * fruitArray.length)];
};
var fruitSelection = ["Apple", "Orange", "Lemon"];
var fruitOne = "go"
var fruitTwo = "go"
var fruitThree = "go"

function increaseMoney() {
  userMoney += 1;
  $('#purse').html(userMoney);

}

function decreaseMoney() {
  userMoney -= 1;
  $('#purse').html(userMoney);
}

function spinWheel() {
  fruitOne = fruitChooser(fruitSelection);
  fruitTwo = fruitChooser(fruitSelection);
  fruitThree = fruitChooser(fruitSelection);
  $('#fruit1').html(fruitOne);
  $('#fruit2').html(fruitTwo);
  $('#fruit3').html(fruitThree);
  checkCombination();
  console.log(fruitOne, fruitTwo, fruitThree)
}

function checkCombination() {
  if ((fruitOne == fruitTwo) &&
      (fruitOne == fruitThree)) {
        $('.notifications').html("You WIN!!").css("color", 'red')
      } else {
        $('.notifications').html("try again..").css("color", "blue")
      }
}
