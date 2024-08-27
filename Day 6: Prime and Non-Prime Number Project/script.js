document.addEventListener("DOMContentLoaded", function () {
  const numberInput = document.getElementById("numberInput");
  const checkButton = document.getElementById("checkButton");
  const resultMessage = document.getElementById("resultMessage");

  checkButton.addEventListener("click", function () {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
      resultMessage.textContent = "Oops! Please enter a valid number.";
      resultMessage.style.color = "red";
      return;
    }
    if (isPrime(number)) {
      resultMessage.textContent = `${number} is a Prime number`;
      resultMessage.style.color = "green";
    } else {
      resultMessage.textContent = `${number} is not a Prime number`;
      resultMessage.style.color = "red";
    }
  });
});

function isPrime(number) {
  if (number <= 1) return false;
  if (number <= 3) return true;
  if (number % 2 === 0 || number % 3 === 0) return false;

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) return false;
  }

  return true;
}
