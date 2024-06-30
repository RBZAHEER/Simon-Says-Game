let gameseq = [];
let userseq = [];
let h3 = document.querySelector("h3");
let started = false;
let level = 0;
let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash"); //gameflash class set to flash
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash"); //gameflash class set to flash
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelup() {
    userseq=[];
    level++;
    h3.innerText = `Level ${level}`;

    //flash the button

    let randIdx = Math.floor(Math.random() * btns.length); // Corrected index range
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.butbox.${randColor}`); // Selecting buttons with class `butbox` and the randomly chosen color

    gameseq.push(randColor);
    console.log(gameseq);
    gameflash(randBtn);
}

function checkAns(idx) {
    // let idx = level - 1;
    if (userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
        }
    else {
        h3.innerText = `Game Over!! Press any key to start again. 
        Your Score is : ${level}` ;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id"); // Retrieving the id directly
    userseq.push(userColor);
    console.log(userseq); // Log the userseq array to check if the value is stored correctly

    checkAns(userseq.length -1);
}



let allBtns = document.querySelectorAll(".butbox");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}


function reset(){
    started =false;
    gameseq = [];
    userseq = [];
    level = 0;
}
