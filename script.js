let omikujiButton = document.getElementById("omikuji-button");
let resut = document.getElementById("result");
omikujiButton.style.height = "30px";
omikujiButton.style.width = "400px";

function omikuji() {
  let r = Math.random();
  if (r < 0.2) {
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r < 0.7) {
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    result.textContent = "凶";
    result.style.color = "blue";
  }
}
omikujiButton.onclick = omikuji;

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let timeResult = document.getElementById("time-result");
let resetButton = document.getElementById("reset-button");
startButton.style.height = "30px";
startButton.style.width = "200px";
stopButton.style.height = "30px";
stopButton.style.width = "200px";
resetButton.style.height = "30px";
resetButton.style.width = "400px";
let time = 0;
function tick() {
  time = time + 1;
}
function timeRecord() {
  timeResult.textContent = time;
}
let timerId;
function start() {
  if (time === 0) {
    timerId = setInterval(tick, 1000);
    setInterval(timeRecord, 1000);
  }
}

function stop() {
  clearInterval(timerId);
}
function reset() {
  time = 0;
  timeResult.textContent = 0;
  stop();
}
startButton.onclick = start;
stopButton.onclick = stop;
resetButton.onclick = reset;
