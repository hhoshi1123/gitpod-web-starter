let omikujiButton = document.getElementById("omikuji-button");
let resut = document.getElementById("result");
function omikuji() {
  let r = Math.random();
  if (r < 0.2) {
    result.textContent = "大吉";
  } else if (r < 0.7) {
    result.textContent = "吉";
  } else {
    result.textContent = "凶";
  }
}
omikujiButton.onclick = omikuji;

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let timeResult = document.getElementById("time-result");
let time = 0;
function tick() {
  time = time + 1;
}
function timeRecord() {
  timeResult.textContent = time;
}
let timerId;
function start() {
  timerId = setInterval(tick, 1000);
  setInterval(timeRecord, 1000);
}

function stop() {
  clearInterval(timerId);
}
startButton.onclick = start;
stopButton.onclick = stop;
