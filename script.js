var loader = document.querySelector(".preloader");
window.addEventListener("load", () => setTimeout(() => {
    loader.style.display = "none";

    clock();
    function clock() {
      const today = new Date();
  
      // get time components
      const hours = today.getHours();
      const minutes = today.getMinutes();
      const seconds = today.getSeconds();
  
      //add '0' to hour, minute & second when they are less 10
      const hour = hours < 10 ? "0" + hours : hours;
      const minute = minutes < 10 ? "0" + minutes : minutes;
      const second = seconds < 10 ? "0" + seconds : seconds;
  
      //make clock a 12-hour time clock
      const hourTime = hour > 12 ? hour - 12 : hour;
  
      // if (hour === 0) {
      //   hour = 12;
      // }
      //assigning 'am' or 'pm' to indicate time of the day
      const ampm = hour < 12 ? "AM" : "PM";
  
      // get date components
      const month = today.getMonth();
      const year = today.getFullYear();
      const day = today.getDate();
  
      //declaring a list of all months in  a year
      const monthList = [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre"
      ];
  
      //get current date and time
      const date = monthList[month] + " " + day + ", " + year;
      const time = hourTime + ":" + minute + ":" + second + ampm;
  
      //combine current date and time
      const dateTime = date + " - " + time;
  
      //print current date and time to the DOM
      document.getElementById("date-time").innerHTML = dateTime;
      setTimeout(clock, 1000);
    }
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