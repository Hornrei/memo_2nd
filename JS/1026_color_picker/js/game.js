

const colors = {
    "紅梅色": "#f2a01",
    "緋色": "#d3381c",
    "香色": "#efcd9a",
    "菜の花色": "#ffec47",
    "山吹色": "#f8b500",
    "若竹色": "#68be8d",
    "青磁色": "#7ebea5",
    "白緑": "#d6e9ca",
    "若草色": "#c3d825",
    "利休茶": "#a59564",
    "紫紺": "#460e44",
    "菖蒲色": "#674196",
    "桔梗色": "#5654a2",
    "淡藤色": "#bbc8e6",
    "紺碧": "#007bbb",
    "瓶覗": "#a2d7dd",
    "月白": "#eaf4fc",
    "翡翠色": "#38b48b",
    "菖蒲色": "#cc7eb1",
    "胡桃染": "#a58f86",
    "暗黒色": "#16160e"
};

const colorNames = Object.keys(colors);
const totalQuestions = 6;
const selectedColors = [];

const colorBlock = document.getElementById("color-block");
const colorNameElement = document.getElementById("color-name");
const userAnswerInput = document.getElementById("user-answer");
const submitButton = document.getElementById("submit-button");
const resultElement = document.getElementById("result");
let comprete = 0;
const hintElement = document.getElementById("hint");

// 1問目の出題を開始
window.addEventListener('load', startGame);

function getRandomColor() {
    if (colorNames.length === 0) {
        return null;
    }
    const randomIndex = Math.floor(Math.random() * colorNames.length);
    const randomColorName = colorNames[randomIndex];
    colorNames.splice(randomIndex, 1);
    selectedColors.push(randomColorName);
    return randomColorName;
}

function displayColor() {
    const currentColorName = getRandomColor();
    if (currentColorName) {
        const colorCode = colors[currentColorName];
        colorBlock.style.backgroundColor = colorCode;
        colorNameElement.textContent = "";
        userAnswerInput.value = "";
    } else {
        endGame();
    }
}

function checkAnswer() {
    const userAnswer = userAnswerInput.value;
    const correctColorName = selectedColors[selectedColors.length - 1];

    if (userAnswer.toLowerCase() === correctColorName.toLowerCase()) {
        resultElement.textContent = "正解!";
        comprete += 1;
    } else {
        resultElement.textContent = "不正解";
        hintElement.textContent = `正解は「${correctColorName}」です`;
    }

    if (selectedColors.length < totalQuestions) {
        displayColor();
    } else {
        endGame();
    }
}

function startGame() {
    displayColor();
    submitButton.addEventListener("click", checkAnswer);
}

function endGame() {
    colorBlock.style.display = "none";
    userAnswerInput.style.display = "none";
    submitButton.style.display = "none";
    resultElement.textContent = `5問中 ${comprete} 問正解`;
}

startGame();
