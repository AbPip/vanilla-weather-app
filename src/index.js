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
  tempInteger.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = `${response.data.name}, ${response.data.sys.country}`;
  description.innerHTML = response.data.weather[0].description;
  tempHigh.innerHTML = Math.round(response.data.main.temp_max);
  tempLow.innerHTML = Math.round(response.data.main.temp_min);
  humidity.innerHTML = response.data.main.humidity;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  date.innerHTML = formatDate(response.data.dt * 1000);
  console.log(response.data);
}

let apiKey = `000e705a9dacee472a121f7e5978d1ca`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Wellington&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
