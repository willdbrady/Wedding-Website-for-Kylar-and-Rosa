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