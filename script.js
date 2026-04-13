const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const card = document.getElementById("card");
const apiKey = "c588a0f31ba23bb28b9dbd2bea5d73bc";

searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  if (city) {
    try {
      let weatherData = await getWeatherData(city);
      displayWeatherInfo(weatherData);
    } catch (error) {
      displayError("Unknown Country");
    }
  } else {
    displayError("Please, enter a country");
  }
});

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lat={lat}&lon={lon}&appid=${apiKey}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new error();
  }
  console.log(response);
  return await response.json();
}

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
  }, 5000);
}
