"use strict";

const squares = document.querySelectorAll('.square');
/* querySelectorAll nos trae un array*/
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('.time_left_js');
const score = document.querySelector('.score_js');

let result = 0;
let hitPosition;
let currentTime = 10;
function randomSquare() {
    squares.forEach(square =>{square.classList.remove('mole')})
    
    let randomSquare = squares[Math.floor(Math.random()*9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
}

squares.forEach(square =>{
    square.addEventListener("click", () =>{
        if(square.id == hitPosition){
            result++;     
            score.innerHTML = result;
            hitPosition= null;
        }
    })
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000);
}

function countDown (){
    currentTime--;
    timeLeft.textContent = currentTime;
    if( currentTime == 0){
        clearInterval(countDownTimerId);
        alert('GAME OVER! Your final score is' + result);
    }
}
let countDownTimerId = setInterval(countDown, 1000);
moveMole();