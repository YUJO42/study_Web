// import "./styles.css";

const container = document.querySelector(".christmas"),
  text = container.querySelector("h2"),
  count = container.querySelector("h3");

text.innerHTML = "Time Untill Christmas!";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

function countDown(distance) {
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  const days = Math.floor(distance / day);
  const hours = Math.floor((distance % day) / hour);
  const minutes = Math.floor((distance % hour) / minute);
  const seconds = Math.floor((distance % minute) / second);

  count.innerHTML = `${days < 10 ? `0${days}` : `${days}`}d
  ${hours < 10 ? `0${hours}` : `${hours}`}h ${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  }m ${seconds < 10 ? `0${seconds}` : `${seconds}`}s
  `;
}

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const nowDate = new Date();
  countDown(xmasDay - nowDate);
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
