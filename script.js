let score = 0;
let timeLeft = 10;
let gameActive = false;

function startGame() {
    score = 0;
    timeLeft = 10;
    gameActive = true;

    document.getElementById("score").innerText = score;
    document.getElementById("status").innerText = "Game Started!";
    document.getElementById("clickBtn").disabled = false;

    let timer = setInterval(() => {
        timeLeft--;
        document.getElementById("status").innerText = "Time Left: " + timeLeft + "s";

        if (timeLeft <= 0) {
            clearInterval(timer);
            gameActive = false;
            document.getElementById("clickBtn").disabled = true;
            document.getElementById("status").innerText = "Game Over! Final Score: " + score;
        }
    }, 1000);
}

function increaseScore() {
    if (gameActive) {
        score++;
        document.getElementById("score").innerText = score;
    }
}