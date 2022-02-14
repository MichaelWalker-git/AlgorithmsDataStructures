
// Build a timer
//  1. Given 10 seconds as totoal time.
let initialTimer = 10;
let currentTime;
let timeoutId;
const timerDisplay = document.getElementById("timer-display");

const startBtn = document.getElementById("timer-toggle");

const resetBtn = document.getElementById("timer-reset");

//  2. Upon clicking "Start"
//    - It will show in the input like 10, 9, ...
//    - It will change the Button copy from "Start" to "Pause"

const countDownTimer = () => {
  let startingPoint = (currentTime < initialTimer) ? currentTime : initialTimer;

  for(let i = startingPoint; i >= 0; i--){
      timeoutId = setInterval(() => {
        currentTime = i;
        timerDisplay.innerHTML = i;
      }, (1000))
  }
}

startBtn.addEventListener("click", countDownTimer)
//  3. Upon clicking "Pause"
//    - It will stop the timer
//    - It will change the Button copy from "Pause" to "Start"

const clearTimeOut = () => {
  clearInterval(timeoutId);
}


//  4. Upon clicking "Reset"
//    - It will reset the timer to the original given time
//    - It will change the Button copy from "Pause" to "Start"

const DEFAULT_TIME = 10
let time = 0;
let timex;

const countDownClock = document.getElementById("countdown");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

countDownClock.textContent = DEFAULT_TIME

const startTimer = () => {
  time = time === 0 ? DEFAULT_TIME : time
  timex = setTimeout(function () {
    time--;
    if(time >= 0){
      countDownClock.textContent = time;
        startTimer();
    }
  }, 1000);
}


startBtn.addEventListener("click", () => {
  startTimer()
})

stopBtn.addEventListener("click", () => {
  clearTimeout(timex)
})

resetBtn.addEventListener("click", () => {
  time = DEFAULT_TIME;
  countDownClock.textContent = DEFAULT_TIME;

})
