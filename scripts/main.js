/*----переменные-------------------------------------------*/

const burgerBtn = document.getElementById("burger");
const nav = document.getElementById("nav");

/*----код-------------------------------------------*/

// бургер
burgerBtn.addEventListener("click", () => {
    nav.classList.toggle("header__nav--active")
})