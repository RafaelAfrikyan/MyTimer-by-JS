const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");

const setTime = () => {
  if (second.innerText == 59) {
    second.innerText = 0;
    minute.innerText++;
    if (minute.innerText < 10) {
      minute.innerText = `0${minute.innerText++}`;
    }
  }
  if (minute.innerText == 60) {
    minute.innerText = 0;
    hour.innerText++;
  }
  second.innerText++;

  if (second.innerText < 10) {
    second.innerText = `0${second.innerText++}`;
  }
};

const startFoo = function () {
  setInterval(setTime, 1000);
};

start.addEventListener("click", startFoo);
reset.addEventListener("click", clearInterval(startFoo));
