let count = 0;

const value =  document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(btn => {
    btn.addEventListener("click", e => {
        let elementId = e.currentTarget.id;
        if(elementId === 'decrease'){
            count--;
        }
        else if(elementId === 'reset'){
            count = 0;
        }
        else if(elementId === 'increase'){
            count++;
        }

        value.textContent = count;
        value.style.color = count > 0 ? "green" : count < 0 ? "red" : "#007bff";
    });
});