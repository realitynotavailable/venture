let btn = document.querySelector(".js-popup-link");
let popup = document.querySelector(".popup");
let logo = document.querySelector(".header__logo");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    popup.classList.toggle("is-open");
});
