let score = Number(localStorage.getItem("score")) || 0;
let energy = Number(localStorage.getItem("energy")) || 100;

const coin = document.getElementById("coin");
const scoreText = document.getElementById("score");

const energyFill = document.getElementById("energy-fill");
const energyText = document.getElementById("energy-text");

function updateUI(){

    scoreText.innerText = score;

    energyText.innerText = energy + " / 100";

    energyFill.style.width = energy + "%";

    localStorage.setItem("score",score);
    localStorage.setItem("energy",energy);

}

updateUI();
coin.style.animation = "coinSpin .25s";

setTimeout(() => {
    coin.style.animation = "coinFloat 2s infinite ease-in-out";
},250);
coin.addEventListener("click",()=>{

    if(energy<=0) return;

    score++;

    energy--;

    updateUI();
const effects=document.getElementById("effects");

const plus=document.createElement("div");

plus.className="plusOne";

plus.innerText="+1";

effects.appendChild(plus);

setTimeout(()=>{

    plus.remove();

},800);
    coin.style.transform="scale(.9)";

    setTimeout(()=>{
        coin.style.transform="scale(1)";
    },100);

});

setInterval(()=>{

    if(energy<100){

        energy++;

        updateUI();

    }

},1000);
