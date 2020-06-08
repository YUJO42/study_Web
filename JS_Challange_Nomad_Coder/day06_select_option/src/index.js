// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// const country = document.querySelector.

const USER_COUNTRY = "currentCountry";

function selectCountry() {
//
}

function loadCountry() {
  const currentCountry = localStorage.getItem(USER_COUNTRY);
  if (currentCountry === null) {
    selectCountry();
}

function init() {
  loadCountry()
}

init();
