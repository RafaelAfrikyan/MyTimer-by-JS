const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const reset = document.querySelector(".reset");
const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
let stop;

const setTime = function () {
  stop = setInterval(() => {
    if (second.innerText == 59) {
      second.innerText = 0;
      minute.innerText++;
    }
    if (minute.innerText < 10) {
      minute.innerText = `0${minute.innerText++}`;
    }

    if (minute.innerText == 60) {
      minute.innerText = 0;
      hour.innerText++;
    }

    second.innerText++;

    if (second.innerText < 10) {
      second.innerText = `0${second.innerText++}`;
    }
  }, 1000);
};

const pauseFoo = function () {
  clearInterval(stop);
};
const resetFoo = function () {
  hour.innerText = "00";
  minute.innerText = "00";
  second.innerText = "00";
  clearInterval(stop);
};

start.addEventListener("click", setTime);
pause.addEventListener("click", pauseFoo);
reset.addEventListener("click", resetFoo);
