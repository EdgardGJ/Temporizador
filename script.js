document.addEventListener('DOMContentLoaded', function() {

let hr = min = sec = ms = '0' + 0, startTimer;

const message = document.querySelector('.message')
const startBtn = document.querySelector('.start'),
  stopBtn = document.querySelector('.stop'),
  reseetBtn = document.querySelector('.reset');


startBtn.addEventListener('click', start)
stopBtn.addEventListener('click', stop)
reseetBtn.addEventListener('click', reset)


function start() {
  startBtn.classList.add('active');
  stopBtn.classList.remove('stopActive')
  message.classList.add('initial')

  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? '0' + ms : ms;

    if(ms === 100) {
      sec++;
      sec = sec < 10 ? '0' + sec : sec;
      ms = '0' + 0;
    }
    if(sec === 60) {
      min++;
      min = sec < 10 ? '0' + min : min;
      sec = '0' + 0;
    }
    if(min === 60) {
      hr++;
      hr = sec < 10 ? '0' + hr : hr;
      min = '0' + 0;
    }

    putValue();

  }, 10)
}

function stop() {
  message.classList.remove('initial')
  startBtn.classList.remove('active')
  stopBtn.classList.remove('stopActive')
  clearInterval(startTimer)
}

function reset () {
  message.classList.remove('initial')
  startBtn.classList.remove('active')
  stopBtn.classList.remove('stopActive')
  clearInterval(startTimer)
  hr = min = sec = ms = '0' + 0
  putValue()
}

function putValue() {
  document.querySelector('.millisecond').innerHTML = ms;
  document.querySelector('.second').innerHTML = sec;
  document.querySelector('.minute').innerHTML = min;
  document.querySelector('.hour').innerHTML = hr
}



})