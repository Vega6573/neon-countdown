let time = 5 * 60;
const display = document.getElementById('timer');

function format(sec) {
  const min = String(Math.floor(sec / 60)).padStart(2, '0');
  const seconds = String(sec % 60).padStart(2, '0');
  return `${min}:${seconds}`;
}

function countdown() {
  display.textContent = format(time);
  if (time > 0) {
    time--;
    setTimeout(countdown, 1000);
  } else {
    display.style.opacity = "0.4";
  }
}

window.onload = countdown;
