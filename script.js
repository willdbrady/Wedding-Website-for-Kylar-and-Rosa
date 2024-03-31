(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
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