const btnElement = document.querySelector('button');
const spanElement = document.getElementById('updateContent');

btnElement.onclick = () => {
    const userInput = prompt('Hey, Enter your name for Display!');

    spanElement.textContent = (userInput === null || userInput.trim() === '') ? 'Anonymous' : userInput;
};
