let score = 0;
const scoreDisplay = document.getElementById("score");
const button = document.getElementById("increaseScore");
const plant = document.getElementById("plant");

// Array of 6 images for the plant growth progression
const plantStages = [
  "plant1.png", // Day 0 (initial stage)
  "plant2.png", // After 8 days
  "plant3.png", // After 16 days
  "plant4.png", // After 24 days
  "plant5.png", // After 32 days
  "plant6.png"  // After 40 days (final stage)
];

// Calculate days per stage: 40 days divided by 5 intervals = 8 days per stage
const daysPerStage = 40 / (plantStages.length - 1);

button.addEventListener("click", () => {
  if (score < 40) {
    score++;
    scoreDisplay.textContent = score;
    
    // Determine the current plant stage based on the day count.
    const stage = Math.min(plantStages.length - 1, Math.floor(score / daysPerStage));
    plant.src = plantStages[stage];
    
    // When the 40th day is reached, show the congratulatory message.
    if (score === 40) {
      button.disabled = true;
      setTimeout(() => {  // slight delay for user experience
        alert("Congratulations on completing 40 days!");
      }, 100);
    }
  }
});
