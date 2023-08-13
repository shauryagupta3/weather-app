import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";
import "../../src/components/style/forecast.css";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const WeatherForecast = ({ data }) => {
  const daysInWeek = new Date().getDay();
  const forecastDays = days
    .slice(daysInWeek, days.length)
    .concat(days.slice(0, daysInWeek));
  console.log(forecastDays, daysInWeek);
  return (
    <div className="mainweather">
      <label className="title">Daily</label>
      <Accordion className="accordian" allowZeroExpanded>
        {data.list.slice(0, 5).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="dailyItem">
                  <img
                    src={`/src/components/assets/${item.weather[0].icon}.png`}
                    alt="weather"
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="desc">{item.weather[0].description}</label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°C/
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label htmlFor="">Pressure</label>
                  <label htmlFor="">{item.main.pressure}hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Clouds</label>
                  <label htmlFor="">{item.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Sea Level</label>
                  <label htmlFor="">{item.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Humdity</label>
                  <label htmlFor="">{item.main.humidity}%</label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Wind Speed</label>
                  <label htmlFor="">
                    {Math.round(3.6 * item.wind.speed)}kmph
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label htmlFor="">Feels Like</label>
                  <label htmlFor="">{item.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default WeatherForecast;
