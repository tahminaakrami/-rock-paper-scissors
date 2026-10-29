let userScore = 0;
let computerScore = 0;

const userHand = document.getElementById("userHand");
const computerHand = document.getElementById("computerHand");

const userScoreText = document.getElementById("userScore");
const computerScoreText = document.getElementById("computerScore");

const result = document.getElementById("result");

const hands = {
    rock: "✊",
    paper: "✋",
    scissors: "✌️"
};

function playGame(userChoice) {

    const choices = ["rock", "paper", "scissors"];

    const randomIndex = Math.floor(Math.random() * 3);

    const computerChoice = choices[randomIndex];

    userHand.textContent = hands[userChoice];
    computerHand.textContent = hands[computerChoice];

    if (userChoice === computerChoice) {

        result.textContent = "مساوی شدید!";

        document.body.style.backgroundColor = "#ff0000";

    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        userScore++;

        userScoreText.textContent = userScore;

        result.textContent = "تبریک! شما برنده شدید 🎉";

        document.body.style.backgroundColor = "#00ff00";

    } else {

        computerScore++;

        computerScoreText.textContent = computerScore;

        result.textContent = "کمپیوتر برنده شد! دوباره تلاش کنید.";

        document.body.style.backgroundColor = "#ff0000";

    }

}

function resetGame() {

    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;

    userHand.textContent = "✊";
    computerHand.textContent = "✊";

    result.textContent = "یکی از گزینه‌ها را انتخاب کنید!";

    document.body.style.backgroundColor = "#ff0000";

}