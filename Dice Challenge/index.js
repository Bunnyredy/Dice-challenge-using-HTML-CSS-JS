var randomnum1 = Math.floor(Math.random() * 6) + 1;

var randomdice1 = "dice" + randomnum1 + ".png";

var image1 = document.querySelectorAll("img")[0];

var randomnum2 = Math.floor(Math.random() * 6) + 1;

var randomdice2 = "dice" + randomnum2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomdice1);

image2.setAttribute("src", randomdice2);


if(randomnum1 > randomnum2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomnum1 < randomnum2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

