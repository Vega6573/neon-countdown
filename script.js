// Total countdown seconds (5 minutes)
let remaining = 5 * 60;
const display = document.getElementById('timer');

function formatTime(sec) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = (sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function tick() {
  display.textContent = formatTime(remaining);
  
  if (remaining > 0) {
    remaining--;
    // schedule next tick
    setTimeout(tick, 1000);
  } else {
    // Optional: flash or hide when done
    display.style.opacity = '0.5';
  }
}

// Start countdown on load
window.onload = tick;
