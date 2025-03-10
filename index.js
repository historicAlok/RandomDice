randomNumber1 = Math.floor(Math.random()*6)+ 1; // give values b/w 1 to 6
var randomDiceImage = "dice" + randomNumber1 + ".png"; //give values b/w dice1.png to dice6.png
var randomImageSource = "images/" + randomDiceImage; // give path to images

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource)

randomNumber2 = Math.floor(Math.random()*6)+ 1; // give values b/w 1 to 6
var randomDiceImage2 = "dice" + randomNumber2 + ".png"; //give values b/w dice1.png to dice6.png
var randomImageSource2 = "images/" + randomDiceImage2; // give path to images


var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Alok Wins";
}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "Adi Wins🚩";
}

else{
    document.querySelector("h1").innerHTML = "Alok 🤝 Adi";
}