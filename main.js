const btnStart = document.querySelector('.main');
const btnReset = document.querySelector('.reset');
let showTime = document.querySelector('.time div');

let time = 0;
let active = false;
let interval;

const startCount = () => {
  if (!active) {
    active = !active;
    btnStart.textContent = "Stop";
    interval = setInterval(start, 10);
  } else {
    active = !active;
    btnStart.textContent = "Start";
    clearInterval(interval);
  }
}

const start = () => {
  time++;
  showTime.textContent = (time / 100).toFixed(2) < 10 ? `0${(time / 100).toFixed(2)}` : (time / 100).toFixed(2);
}

const resetCount = () => {
  time = 0;
  showTime.textContent = '00:00';
  active = false;
  btnStart.textContent = "Start";
  clearInterval(interval);
}

btnStart.addEventListener('click', startCount);
btnReset.addEventListener('click', resetCount);

