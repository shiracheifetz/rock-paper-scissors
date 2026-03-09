const imageList = document.querySelectorAll(".option");

imageList.forEach(button => {
    button.addEventListener("click", function(e) {
        const selectedElement = e.currentTarget;
        selectedElement.classList.add("selected");
        imageList.forEach(img => img.classList.add("locked"));
        playGame(selectedElement.id);
    });
});

function playGame(selectionId) {
    const userImg = document.querySelector("#user-choice img");
    userImg.classList.add("fade-in-element");
    userImg.src = selectionId + ".png";

    const choices = ["rock", "paper", "scissors"];
    const computerChoiceIndex = Math.floor(Math.random()*3);

    const computerImg = document.querySelector("#computer-choice img");
    computerImg.classList.add("fade-in-element");
    computerImg.src = choices[computerChoiceIndex] + ".png";

    let resultText = document.getElementById("result");

    if (selectionId=="rock" && choices[computerChoiceIndex]=="scissors" ||
        selectionId=="paper" && choices[computerChoiceIndex]=="rock" ||
        selectionId=="scissors" && choices[computerChoiceIndex]=="paper"
    ) {
        resultText.innerHTML = "You won!"
    }
    else if (selectionId == choices[computerChoiceIndex]) {
        resultText.innerHTML = "Tie!"
    }
    else {
        resultText.innerHTML = "Computer won."
    }

    resultText.hidden = false;
}
