const time = document.querySelector(".time");
const period = document.querySelector("h3");
const date = document.querySelector(".date");

function digitalClock() {
  const currentTime = new Date();

  let hours = currentTime.getHours();
  let min = currentTime.getMinutes();
  let sec = currentTime.getSeconds();
  let currDate = currentTime.getDate();
  let month = currentTime.getMonth();
  let year = currentTime.getFullYear();

  let ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  time.textContent = `${hours}:${min}:${sec}`;
  period.textContent = `${ampm}`;
  date.textContent = `${currDate}:${month}:${year}`;
}

setInterval(digitalClock, 1000);
