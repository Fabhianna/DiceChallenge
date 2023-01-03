let randomNumber1 = Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");

let randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2){
    displayHeading = document.querySelector("h1");
    displayHeading.innerHTML = "It's a Draw";
}
else if(randomNumber1 > randomNumber2){
    displayHeading = document.querySelector("h1");
    displayHeading.innerHTML = "🚩 Player 1 wins";
}
else {
    displayHeading = document.querySelector("h1");
    displayHeading.innerHTML = "Player 2 wins 🚩";
}