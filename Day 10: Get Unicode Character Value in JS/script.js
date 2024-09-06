function extractChar() {
    const input = document.getElementById("inputType").value;

    if (input) {
        const unicodeValue = input.charCodeAt(0);
        const result = `The Unicode value of "${input}" is "${unicodeValue}"`;
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Hey! Please enter a character.";
    }
}
