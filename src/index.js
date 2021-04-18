let city = "addis ababa";
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

  description.innerHTML = response.data.weather[0].description;
  temperatureElement.innerHTML = `${temperature}`;
  humidityElement.innerHTML = response.data.main.humidity;
  windSpeedElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute =
    ("src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
}
let h1 = document.querySelector("#city");
h1.innerHTML = city;
axios.get(apiUrl).then(showTemperature);
