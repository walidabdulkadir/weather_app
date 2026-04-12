const weatherForm = document.getElementById("weather-form");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const card = document.getElementById("card");
const apiUrl = "c588a0f31ba23bb28b9dbd2bea5d73bc";

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
    } catch (error) {}
  } else {
    displayError("Please, Enter a city");
  }
});

async function getWeatherData(city) {}

function displayWeatherInfo(data) {}

function getWeatherEmoji(weatherId) {}

function displayError(message) {
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
  setTimeout(() => {
    card.textContent = "";
  }, 9000);
}
