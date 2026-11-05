function createParagraph() {
    const para = document.createElement("p");
    para.textContent = "你点击了按钮！";
    console.log(para);
    //document.body.appendChild(para);
}

function resetGame() {
    guessCount = 1;

    const resetParas = document.querySelectorAll(".resultParas p");
    for (const resetPara of resetParas) {
        resetPara.textContent = "";
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.backgroundColor = "white";

    randomNumber = Math.floor(Math.random() * 100) + 1;
}

const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    if (button.classList.contains("profile-toggle")) {
        continue;
    }
    button.addEventListener("click", createParagraph);
}

const profile = document.querySelector(".profile");
const profileToggle = document.querySelector(".profile-toggle");
const profileCard = document.querySelector("#profile-card");

function setProfileOpen(open) {
    profileCard.hidden = !open;
    profileToggle.setAttribute("aria-expanded", String(open));
}

profileToggle.addEventListener("click", () => {
    setProfileOpen(profileCard.hidden);
});

document.addEventListener("click", (event) => {
    if (!profile.contains(event.target)) {
        setProfileOpen(false);
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        setProfileOpen(false);
    }
});

