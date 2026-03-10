const imageList = document.querySelectorAll(".option");
const userContainer = document.getElementById("user-choice");
const computerContainer = document.getElementById("computer-choice");
const vsContainer = document.getElementById("vs");
const userImg = userContainer.querySelector("img");
const computerImg = computerContainer.querySelector("img");
let resultText = document.getElementById("result");

imageList.forEach(button => {
    button.addEventListener("click", function(e) {
        imageList.forEach(img => img.classList.remove("selected"));
        playGame(e.target.id);
    });
});

document.addEventListener("keydown", function(e) {
    imageList.forEach(img => img.classList.remove("selected"));
    const character = e.key;
    console.log(character);
    let userChoice;
    if (character == "r"){
        userChoice = "rock";
    }
    else if (character == "p"){
        userChoice = "paper";
    }
    else if (character == "s"){
        userChoice = "scissors";
    }
    if (userChoice) {
        playGame(userChoice);
    }
});

function playGame(selectionId) {
    document.getElementById(selectionId).classList.add("selected");
    imageList.forEach(img => img.classList.add("locked"));
    userImg.classList.add("fade-in-element");
    userImg.src = selectionId + ".png";
    userContainer.style.visibility = "visible";
    vsContainer.style.visibility = "visible";

    const choices = ["rock", "paper", "scissors"];
    const computerChoiceIndex = Math.floor(Math.random()*3);
    const computerChoice = choices[computerChoiceIndex];

    computerImg.classList.add("fade-in-element");
    computerImg.src = computerChoice + ".png";
    computerContainer.style.visibility = "visible";

    displayResult(selectionId, computerChoice)
}

function displayResult(userChoice, computerChoice) {
    if ((userChoice=="rock" && computerChoice=="scissors") ||
        (userChoice=="paper" && computerChoice=="rock") ||
        (userChoice=="scissors" && computerChoice=="paper")) {
        resultText.innerHTML = "You won!"
    }
    else if (userChoice == computerChoice) {
        resultText.innerHTML = "Tie!"
    }
    else {
        resultText.innerHTML = "Computer won!"
    }
}

document.getElementById("play-btn").addEventListener("click", () => {
    imageList.forEach(img => img.classList.remove("locked", "selected"));
    userContainer.style.visibility = "hidden";
    computerContainer.style.visibility = "hidden";
    vsContainer.style.visibility = "visible";
    resultText.innerHTML = "";
});