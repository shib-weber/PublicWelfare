let b =document.querySelector("body");
let m=document.querySelector(".menu");
m.addEventListener("click",()=>{
    b.classList.toggle("comeout");
})
let btns=document.querySelector(".btns");
btns.addEventListener("click",()=>{
    location.href="chat.html";
})
let bt1=document.querySelector("#bt1");
bt1.addEventListener("click",()=>{
    location.href="help.html";
})
let bt9=document.querySelector("#bt9");
bt9.addEventListener("click",()=>{
    location.href="donate.html";
})

