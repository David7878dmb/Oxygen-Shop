const nav = document.getElementById("nav");
const open = document.getElementById("open");
const close = document.getElementById("close");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    close.classList.add("visible");
    open.classList.add("ocult");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible")
    close.classList.remove("visible");
    open.classList.remove("ocult");
})