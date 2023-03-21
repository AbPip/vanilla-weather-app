let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let hour = now.getHours();
let minute = now.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}

let date = now.getDate();
let tellingTime = document.querySelector(".tellingTime");
tellingTime.innerHTML = `${day}, ${hour}:${minute}`;

function displayTemperature(response) {
  let tempInteger = document.querySelector(".degree");
  let cityName = document.querySelector("#city");
  tempInteger.innerHTML = Math.round(response.data.main.temp);
  cityName.innerHTML = response.data.name;
}

let apiKey = `000e705a9dacee472a121f7e5978d1ca`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Wellington&appid=${apiKey}&units=metric`;
console.log(apiUrl);

axios.get(apiUrl).then(displayTemperature);
