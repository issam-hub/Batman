let logo = document.querySelector(".header .logo");
let header = document.querySelector(".header");
let navItems = document.querySelectorAll(".header li");

logo.onclick = function () {
    header.classList.toggle("bgc");
    navItems.forEach((navItem) => {
        navItem.classList.toggle("d-block");
    });
};

let scrollBtn = document.querySelector(".scrollBtn");

window.onscroll = function () {
    if (window.scrollY >= 900) {
        scrollBtn.style.cssText = "opacity: 1; cursor: pointer";
        scrollBtn.onclick = function () {
            window.scroll({
                top: 0,
                behavior: "smooth",
            });
        };
    } else {
        scrollBtn.style.cssText = "opacity: 0; cursor: default";
    }
};
