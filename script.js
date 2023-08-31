let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const ur = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=imperial`;
  const ft = fetch(ur);
  return ft.then((response) => {
    return response.json();
  });
};

const searchCity = () => {
  const city = document.getElementById("city-input").value;
  console.log(city);
  getWeatherData(city)
    .then((res) => {
      showWeatherData(res);
    })
    .catch((error) => {
      console.log(error);
      console.log("something went wrong");
    });
};

const showWeatherData = (weatherData) => {
  console.log(weatherData, "🏋️");
  document.getElementById("temp").innerText = weatherData.main.temp;
  document.getElementById("city-name").innerText = weatherData.name;
  document.getElementById("weather-type").innerText =
    weatherData.weather[0].main;
  document.getElementById("min-temp").innerText = weatherData.main.temp_min;
  document.getElementById("max-temp").innerText = weatherData.main.temp_max;
};
