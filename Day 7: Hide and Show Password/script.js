const eyeIcon = document.getElementById("eyeIcon");
const password = document.getElementById("password");

eyeIcon.onclick = function() {
    if(password.type === "password") {
        password.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
    else {
        password.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}