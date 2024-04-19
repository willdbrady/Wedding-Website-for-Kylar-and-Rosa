//hamburger sliding menu

var slide = document.getElementById('slide');
var burgericon = document.getElementById('burgericon');
burgericon.addEventListener('click', function (e) {
  this.classList.toggle('open');
  slide.classList.toggle('open');
});
slide.addEventListener('click', function () {
  slide.classList.toggle('open');
  burgericon.classList.toggle('open');
});

//hamburger sliding menu

var rsvpslide = document.getElementById('rsvpslide');
var rsvpbutton = document.getElementById('rsvpbutton');
rsvpbutton.addEventListener('click', function (e) {
  this.classList.toggle('open');
  rsvpslide.classList.toggle('open');
});
rsvpslide.addEventListener('click', function () {
  rsvpslide.classList.toggle('open');
  rsvpbutton.classList.toggle('open');
});

//Countdown timer for engagement party
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    engagementparty = "August 11, 2024 15:00:00"

  today = mm + "/" + dd + "/" + yyyy;
  //end

  const countDown = new Date(engagementparty).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;
      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "We had a blast at the engagement party! Pictures coming soon...";
        document.getElementById("headline").style = "padding-bottom: 2rem"
        document.getElementById("rsvpbutton").style = "display: none;"
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
    }, 0)
}());


//accordion
!function () {
  for (
    var l = document.querySelectorAll(".accordion .menu"), e = 0; e < l.length; e++)l[e].addEventListener("click", n);
  function n() {
    for (var e = document.querySelectorAll(".accordion .panel"), n = 0; n < e.length; n++)e[n].className = "panel close";
    if (-1 == this.className.indexOf("active")) {
      for (n = 0; n < l.length; n++)l[n].className = "menu"; this.className = "menu active", this.nextElementSibling.className = "panel open"
    }
    else for (n = 0; n < l.length; n++)l[n].className = "menu"
  }
}();