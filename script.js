const dice = document.getElementById("dice");
const challengeBox = document.getElementById("challengeBox");
const rollButton = document.getElementById("rollButton");

const emotions = [
  { emoji: "😂", challenge: "Tell a joke in 15 seconds!" },
  { emoji: "😡", challenge: "Roar like an angry lion!" },
  { emoji: "😍", challenge: "Say the cheesiest pickup line you know." },
  { emoji: "😱", challenge: "Pretend you just saw a ghost!" },
  { emoji: "😴", challenge: "Act like you're falling asleep in class." },
  { emoji: "🤔", challenge: "Think deeply and share one weird idea!" }
];

rollButton.addEventListener("click", () => {
  dice.style.transform = "rotate(360deg)";

  // Random selection
  const random = Math.floor(Math.random() * emotions.length);
  const { emoji, challenge } = emotions[random];

  setTimeout(() => {
    dice.textContent = emoji;
    challengeBox.textContent = challenge;
    dice.style.transform = "rotate(0deg)";
  }, 400);
});