
//animations
const signin_btn = document.querySelector("#sign-in-btn");
const register_btn = document.querySelector("#register-btn");

const container= document.querySelector(".container");

register_btn.addEventListener("click",()=>{
    container.classList.add("sign-up-mode");
});

signin_btn.addEventListener("click",()=>{
        container.classList.remove("sign-up-mode")
        ;});



