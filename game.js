// Iteration 2: Generate 2 random number and display it on the screen

// Iteration 3: Make the options button functional

// Iteration 4: Build a timer for the game
let referenceTime=undefined;
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let score = 0;
let Timer = document.getElementById("timer");
ResetTime();
let num1=Math.floor(Math.random()*100)
let num2=Math.floor(Math.random()*100)
number1.innerText=num1;
number2.innerText=num2;
let greaterBtn = document.getElementById("greater-than");
greaterBtn.addEventListener("click",function()
{
    if (num1>num2){
        score+=1
        num1=Math.floor(Math.random()*100)
        num2=Math.floor(Math.random()*100)
        number1.innerText=num1;
        number2.innerText=num2;
        clearInterval(referenceTime);
        ResetTime();
    }
    else{
        localStorage.setItem("score",score);
        window.location.href='./gameover.html';
    }
})
let lesserBtn = document.getElementById("lesser-than");
lesserBtn.addEventListener("click",function(){
    if (num1<num2){
        score+=1
        num1=Math.floor(Math.random()*100)
        num2=Math.floor(Math.random()*100)
        number1.innerText=num1;
        number2.innerText=num2;
        clearInterval(referenceTime);
        ResetTime();
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html";
    }

})

let equalBtn = document.getElementById("equal-to");
equalBtn.addEventListener("click",function(){
    if(num1==num2){
        score+=1
        num1=Math.floor(Math.random()*100)
        num2=Math.floor(Math.random()*100)
        number1.innerText=num1;
        number2.innerText=num2;
        clearInterval(referenceTime);
        ResetTime();
    }
    else{
        localStorage.setItem("score",score)
        window.location.href="./gameover.html";
    }
})

function ResetTime(){
    let Time=5;
    Timer.innerText = Time;
    referenceTime=setInterval(() =>{
        Time-=1
        Timer.innerText=Time;
        if(Time==0){
            localStorage.setItem("score",score);
            window.location.href="./gameover.html";
        }
    },1000);
}