// Iteration 5: Store the player score and display it on the game over screen
let scoreGetFromStorage = localStorage.getItem("score");
let scoreBoard = document.getElementById("score-board");
scoreBoard.innerText = scoreGetFromStorage;
let playAgain = document.getElementById("play-again-button");
playAgain.addEventListener("click",function(){
    window.location.href="./index.html";
})
