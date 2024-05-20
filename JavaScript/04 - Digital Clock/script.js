const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function formatTime(time) {
  return time.toString().padStart(2, "0");
}


function isAmPm(hours) {
  return hours >= 12 ? "오후" : "오전";
}


function clock() {
    const date = new Date();
  
    let h = date.getHours();
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
  
    hour.textContent = formatTime(h);
    minute.textContent = formatTime(m);
    seconds.textContent = formatTime(s);
    ampm.textContent = isAmPm(h);
  }
  setInterval(clock, 1000);
  
