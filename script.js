let score = 0;

const coin = document.getElementById("coin");
const scoreText = document.getElementById("score");

// اگر قبلاً امتیاز ذخیره شده باشد
if (localStorage.getItem("score")) {
    score = Number(localStorage.getItem("score"));
    scoreText.innerText = score;
}

coin.addEventListener("click", () => {
    score++;

    scoreText.innerText = score;

    localStorage.setItem("score", score);

    coin.style.transform = "scale(0.9)";

    setTimeout(() => {
        coin.style.transform = "scale(1)";
    }, 100);
});
alert("script loaded");
