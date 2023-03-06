const btn=document.querySelector(".btn");
const text=document.querySelector("#text");


btn.addEventListener("click", () => {
   text.style.visibility="visible";
   text.classList.add('animation');
   document.querySelector('body').style.backgroundColor="rgba(0,0,0, .2)";
   

},{once:true})

window.addEventListener("click", e=> {
    if(e.target===text) {
        text.style.visibility="hidden";
    }
})