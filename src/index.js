let city = "Grande Prairie";
let apiKey = "dbdeefe04c94b8d2607c00ef173913af";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

function showTemperature(response) {
  console.log(response.data);
  let temperature = Math.round(response.data.main.temp);

  let temperatureElement = document.querySelector("#temperature");
  let description = document.querySelector("#temperature-description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#windSpeed");

  description.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = `${temperature}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
}

let h1 = document.querySelector("#city");
h1.innerHTML = city;
axios.get(apiUrl).then(showTemperature);

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", search);

let li = document.querySelector("#date");
let current = new Date();
let date = current.getDate();
let hours = current.getHours();
let munites = current.getMinutes();
let year = current.getFullYear();
console.log(current.getDate());
console.log(current.getMilliseconds());
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[current.getDay()];
console.log(current.getDay());

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[current.getMonth()];
console.log(current.getMonth());
li.innerHTML = `${day},${month} ${date},${year},${hours}:${munites}`;
