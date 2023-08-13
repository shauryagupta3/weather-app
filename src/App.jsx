// import Search from "./components/search.jsx";
import CurrentWeather from "./components/current-weather.jsx";
import WeatherForecast from "./components/forecast.jsx";
import { openweatherKey } from "./components/api.jsx";
import { useState } from "react";
import "./App.css";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentForecast, setCurrentForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openweatherKey}&units=metric`;
    const openWeatherUrlforecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${openweatherKey}&units=metric`;
    const CurrentWeatherfetch = fetch(openWeatherUrl);
    const ForecastWeatherfetch = fetch(openWeatherUrlforecast);
    Promise.all([CurrentWeatherfetch, ForecastWeatherfetch])
      .then(async (responses) => {
        const weatherResponse = await responses[0].json();
        const forecastResponse = await responses[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setCurrentForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((error) => {
        alert("Error fetching data");
        console.log(error);
      });
  };
  return (
    <>
      <div id="main">
        {/* <Search onSearchChange={handleSearchChange} /> */}
        {currentWeather && <CurrentWeather data={currentWeather} />}
        {currentForecast && <WeatherForecast data={currentForecast} />}
      </div>
    </>
  );
}

export default App;
