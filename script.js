const ballNumber = document.getElementById("ball-number");
const generateButton = document.getElementById("generate-button");

function generateRandomNumber() {
  return Math.floor(Math.random() * 49) + 1;
}

function displayRandomNumber() {
  const randomNumber = generateRandomNumber();
  ballNumber.textContent = randomNumber;
}

generateButton.addEventListener("click", displayRandomNumber);
