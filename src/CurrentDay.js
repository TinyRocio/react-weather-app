import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


export default function CurrentDay() {
  let CurrentDayData = {
    date: "April,12,2021",
    day: "Wednesday 10:00",
    city: "New York",
    description: "Sunny",
    temperature: "75"
  };

  return (
    <div className="current">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>Last Updated:</li>
            <li>{CurrentDayData.date}</li>
            <li>{CurrentDayData.day}</li>
          </ul>
        </div>
        <div className="col-6">
          <h2 className="current-day">{CurrentDayData.city}</h2>
          <ul>
          <li>
            <span className="temperature">
                {CurrentDayData.temperature}
                </span>
                <span className="units" >
            <a href="/"> °F</a>|<a href="/">°C</a>
                </span>
          </li>
            <li className="description">{CurrentDayData.description}</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="WHITE"
    size={80}
    animate={true}
  />
        </div>
      </div>
    </div>
  );
}
