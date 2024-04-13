// for dice 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;    // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png";  // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage;  // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// for dice 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var rnadomImageSource = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src", rnadomImageSource);

// winning losing draw case
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins! 🤓";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🤓";
}
else {
    document.querySelector("h1").innerHTML = "It's a draw! 🤓";
}