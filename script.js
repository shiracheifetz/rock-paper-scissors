const imageList = document.querySelectorAll(".option");
const userImg = document.querySelector("#user-choice img");
const computerImg = document.querySelector("#computer-choice img");
let resultText = document.getElementById("result");

imageList.forEach(button => {
    button.addEventListener("click", function(e) {
        const selectedElement = e.currentTarget;
        selectedElement.classList.add("selected");
        imageList.forEach(img => img.classList.add("locked"));
        playGame(selectedElement.id);
    });
});

function playGame(selectionId) {
    userImg.classList.add("fade-in-element");
    userImg.src = selectionId + ".png";
    userImg.style.visibility = "visible";

    const choices = ["rock", "paper", "scissors"];
    const computerChoiceIndex = Math.floor(Math.random()*3);
    const computerChoice = choices[computerChoiceIndex];

    computerImg.classList.add("fade-in-element");
    computerImg.src = computerChoice + ".png";
    computerImg.style.visibility = "visible";

    if ((selectionId=="rock" && computerChoice=="scissors") ||
        (selectionId=="paper" && computerChoice=="rock") ||
        (selectionId=="scissors" && computerChoice=="paper")) {
        resultText.innerHTML = "You won!"
    }
    else if (selectionId == computerChoice) {
        resultText.innerHTML = "Tie!"
    }
    else {
        resultText.innerHTML = "Computer won!"
    }
}

const playBtn = document.getElementById("play-btn")

playBtn.addEventListener('click', function() {
    imageList.forEach(img => img.classList.remove("locked", "selected"));
    userImg.style.visibility = "hidden";
    computerImg.style.visibility = "hidden";
    resultText.innerHTML = "";
});