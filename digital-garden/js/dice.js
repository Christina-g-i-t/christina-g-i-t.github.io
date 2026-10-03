let roll = null;
const diceType = 20;
const dice = document.getElementById("dice")
dice.addEventListener("click", () => {
    roll = Math.floor((Math.random() * diceType + (new Date().getTime())) % diceType + 1);
    dice.textContent = roll;
    if (roll === diceType) {
        dice.style.outlineColor = 'lime';
        dice.style.color = 'lime';
    } else if (roll === 1) {
        dice.style.outlineColor = 'crimson';
        dice.style.color = 'crimson';
    } else {
        dice.style.outlineColor = 'light-dark(var(--light-outlinekleur), var(--dark-groen-schaduwkleur';
        dice.style.color = 'light-dark(var(--light-tekstkleur), var(--dark-tekstkleur))';
    }
});