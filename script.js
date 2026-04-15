const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const card = document.getElementById("card");
const apiKey = "c588a0f31ba23bb28b9dbd2bea5d73bc";

async function getWeatherData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error();
  }
  // console.log(response);
  return await response.json();
}

function displayWeatherInfo(data) {
  const {
    name: city,
    main: { temp, humidity },
    weather: [{ description, id }],
  } = data;

  card.textContent = "";
  card.style.display = "flex";
  card.style.flexDirection = "column";

  const cityDis = document.createElement("h2");
  const tempDis = document.createElement("h1");
  const descriptionDis = document.createElement("p");
  const humidityDis = document.createElement("p");
  const emojiDis = document.createElement("div");

  cityDis.classList.add("cityDis");
  tempDis.classList.add("tempDis");
  descriptionDis.classList.add("descriptionDis");
  humidityDis.classList.add("humidityDis");
  emojiDis.classList.add("emojiDis");

  cityDis.textContent = city;
  tempDis.textContent = temp.toFixed(2) + "°C";
  descriptionDis.textContent = description;
  humidityDis.textContent = "Humidity: " + humidity + "%";
  emojiDis.textContent = getWeatherEmoji(id);

  // append in order
  card.append(cityDis, emojiDis, tempDis, descriptionDis, humidityDis);
}

function getWeatherEmoji(weatherId) {
  if (weatherId >= 200 && weatherId < 300) {
    return "⛈️"; // Thunderstorm
  } else if (weatherId >= 300 && weatherId < 400) {
    return "🌦️"; // Drizzle
  } else if (weatherId >= 500 && weatherId < 600) {
    return "🌧️"; // Rain
  } else if (weatherId >= 600 && weatherId < 700) {
    return "❄️"; // Snow
  } else if (weatherId >= 700 && weatherId < 800) {
    return "🌫️"; // Atmosphere (fog, mist, smoke)
  } else if (weatherId === 800) {
    return "☀️"; // Clear sky
  } else if (weatherId > 800) {
    return "☁️"; // Clouds
  } else {
    return "❓";
  }
}

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
