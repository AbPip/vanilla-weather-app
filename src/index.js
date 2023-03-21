function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day}, ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let tempInteger = document.querySelector(".degree");
  let cityName = document.querySelector("#location");
  let description = document.querySelector("#description");
  let tempHigh = document.querySelector("#high");
  let tempLow = document.querySelector("#low");
  let humidity = document.querySelector("#humidity");
  let windSpeed = document.querySelector("#windSpeed");
  let date = document.querySelector("#date");
  let icon = document.querySelector("#icon");

  celciusTemp = response.data.main.temp;

  tempInteger.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  description.innerHTML = response.data.weather[0].description;
  tempHigh.innerHTML = Math.round(response.data.main.temp_max);
  tempLow.innerHTML = Math.round(response.data.main.temp_min);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  date.innerHTML = formatDate(response.data.dt * 1000);
  icon.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  icon.setAttribute("alt", response.data.weather[0].description);
}

function search(city) {
  let apiKey = `000e705a9dacee472a121f7e5978d1ca`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city-input");
  search(cityInput.value);
}

function switch2Farenheit(event) {
  event.preventDefault();
  let tempInteger = document.querySelector(".degree");
  let farenheitTemp = (celciusTemp * 9) / 5 + 32;
  tempInteger.innerHTML = Math.round(farenheitTemp);
}

function switch2Celcius(event) {
  event.preventDefault();
  let tempInteger = document.querySelector(".degree");
  tempInteger.innerHTML = Math.round(celciusTemp);
}

let celciusTemp = null;

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

let farenheitLink = document.querySelector("#farenheit-link");
farenheitLink.addEventListener("click", switch2Farenheit);

let celciusLink = document.querySelector("#celcius-link");
celciusLink.addEventListener("click", switch2Celcius);

search("London");
