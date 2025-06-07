//SCOREBOARD HOME
let scoreHomeEl = document.getElementById("scorehome-el");
let scoreHome = 0;

function incrementHome1() {
  scoreHome = scoreHome + 1;
  scoreHomeEl.innerText = scoreHome;
}

function incrementHome2() {
  scoreHome = scoreHome + 2;
  scoreHomeEl.innerText = scoreHome;
}

function incrementHome3() {
  scoreHome = scoreHome + 3;
  scoreHomeEl.innerText = scoreHome;
}

//SCOREBOARD GUESTS
let scoreGuestEl = document.getElementById("scoreguest-el");
let scoreGuest = 0;

function incrementGuest1() {
  scoreGuest = scoreGuest + 1;
  scoreGuestEl.innerText = scoreGuest;
}

function incrementGuest2() {
  scoreGuest = scoreGuest + 2;
  scoreGuestEl.innerText = scoreGuest;
}

function incrementGuest3() {
  scoreGuest = scoreGuest + 3;
  scoreGuestEl.innerText = scoreGuest;
}
