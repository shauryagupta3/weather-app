import React from "react";
import "../../src/components/style/current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <div className="city">{data.city}</div>
          <p className="description">{data.weather[0].description}</p>
        </div>
        <img
          src={`/src/components/assets/${data.weather[0].icon}.png`}
          className="weather-icon"
          alt=""
        />
      </div>
      <div className="bottom">
        <p className="temprature">{Math.round(data.main.temp)}°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}°C
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{Math.round(3.6 * data.wind.speed)} kmph</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{Math.round(data.main.humidity)}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure}hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
