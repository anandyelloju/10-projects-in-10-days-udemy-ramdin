const passwordBox = document.getElementById("password");
const genBtn = document.getElementById("btn");
const copyBtn = document.getElementById("copy");

const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_+={}[]|\:;\"'<>,.?/~`";
    let password = "";

    // Length of the password is 8 charators
    for(let i = 0; i < 8; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    passwordBox.value = password;
}

genBtn.addEventListener("click", generatePassword);

copyBtn.addEventListener("click", () => {
    const passwordCopy = passwordBox.value.trim();
    if(!passwordCopy) {
        alert("No password has been copied! Please generate a password first.")
    }

    navigator.clipboard.writeText(passwordCopy)
    .then(() => {
        alert("The password has been successfully copied to the clipboard.")
    })
})