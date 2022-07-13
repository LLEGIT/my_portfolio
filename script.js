var loader = document.querySelector(".preloader");
window.addEventListener("load", () => setTimeout(() => {
    loader.style.display = "none";
}, 1000));

// Dark theme/light theme handler
var body = document.querySelector("body");
var darkThemeBtn = document.querySelector("#dark-theme");
var navBar = document.querySelector(".navbar");
var isDarkTheme = false;
var picOfMe = document.querySelector("#pic_of_me");
var contentTimeline = document.querySelectorAll(".content");
var timeline = document.querySelector(".timeline");
darkThemeBtn.addEventListener("click", function darkTheme() {
    if (isDarkTheme === false) {
        body.style = "background-color: black; color: white;";
        navBar.classList.add("navbar-dark");
        darkThemeBtn.innerHTML = "<i class='fa-solid fa-circle'></i> <span>Thème clair</span>";
        picOfMe.style = "box-shadow: none;";
        timeline.style.setProperty("--check-primary", "white");
        contentTimeline.forEach(container => {
            container.style = "background-color: white; color: black;";
        })
        isDarkTheme = true;
    }
    else {
        body.style = "background-color: white; color: black;";
        navBar.classList.remove("navbar-dark");
        darkThemeBtn.innerHTML = "<i class='fa-solid fa-circle'></i> <span>Thème sombre</span>";
        picOfMe.style = "box-shadow: 3px 3px 6px 1px black;";
        timeline.style.setProperty("--check-primary", "black");
        contentTimeline.forEach(container => {
            container.style = "background-color: black; color: white;";
        })
        isDarkTheme = false;
    }
});

// Project cards 
let projectCards = document.querySelectorAll('.card');
projectCards[0].addEventListener("click", () => window.open("https://github.com/LLEGIT/fake_social_network"));
projectCards[1].addEventListener("click", () => window.open("https://github.com/LLEGIT/fake_spotify"));
projectCards[2].addEventListener("click", () => window.open("https://github.com/LLEGIT/math_training"));
projectCards[3].addEventListener("click", () => window.open("https://github.com/LLEGIT/star_wars_wiki"));