function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}
let city = "Grande prairie";
let apiKey = "dbdeefe04c94b8d2607c00ef173913af";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");
  let iconElement = document.querySelector("#icon");
  let dateElement = document.querySelector("#date");
  description.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = `${temperature}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
let h1 = document.querySelector("#city");
h1.innerHTML = city;
axios.get(apiUrl).then(showTemperature);
