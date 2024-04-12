//Count 

const guests = document.getElementById('guests');
const fElements = [
  document.getElementById('1'),
  document.getElementById('2'),
  document.getElementById('3'),
  document.getElementById('4'),
  document.getElementById('5'),
  document.getElementById('6'),
  document.getElementById('7'),
  document.getElementById('8'),
  document.getElementById('9')
];

const fElementsTwo = [
  document.getElementById('10'),
  document.getElementById('11'),
  document.getElementById('12'),
  document.getElementById('13'),
  document.getElementById('14'),
  document.getElementById('15'),
  document.getElementById('16'),
  document.getElementById('17'),
  document.getElementById('18')
];

const labelCA = [
  document.getElementById('21'),
  document.getElementById('22'),
  document.getElementById('23'),
  document.getElementById('24'),
  document.getElementById('25'),
  document.getElementById('26'),
  document.getElementById('27'),
  document.getElementById('28'),
  document.getElementById('29')
];

const inputCA = [
  document.getElementById('31'),
  document.getElementById('32'),
  document.getElementById('33'),
  document.getElementById('34'),
  document.getElementById('35'),
  document.getElementById('36'),
  document.getElementById('37'),
  document.getElementById('38'),
  document.getElementById('39')
];

guests.addEventListener('change', function () {
  let value = parseInt(guests.value);
  for (let i = 0; i < fElements.length; i++) {
    if (i < value) {
      fElements[i].style.display = "flex";
    } else {
      fElements[i].style.display = "none";
    }
  };
  for (let a = 0; a < fElementsTwo.length; a++) {
    if (a < value) {
      fElementsTwo[a].style.display = "flex";
    } else {
      fElementsTwo[a].style.display = "none";
    }
  };
  for (let a = 0; a < labelCA.length; a++) {
    if (a < value) {
      labelCA[a].style.display = "flex";
    } else {
      labelCA[a].style.display = "none";
    }
  };
  for (let a = 0; a < inputCA.length; a++) {
    if (a < value) {
      inputCA[a].style.display = "flex";
    } else {
      inputCA[a].style.display = "none";
    }
  };
});

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