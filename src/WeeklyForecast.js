import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeeklyForecast(){
    return (
        <div className="WeeklyForecast">
        <div className="row">
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 80°/ </span>
      <span className="weekly-min-temp">55°</span>
      </div>
      </div>
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_NIGHT"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 70°/ </span>
      <span className="weekly-min-temp">50°</span>
      </div>
      </div>
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLOUDY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 65°/ </span>
      <span className="weekly-min-temp">40°</span>
      </div>
      </div>
      <hr />
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="RAIN"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 60°/ </span>
      <span className="weekly-min-temp">50°</span>
      </div>
      </div>
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="WIND"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 60°/ </span>
      <span className="weekly-min-temp">45°</span>
      </div>
      </div>
        <div className="col-4">
        <div className="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span className="max-min"> Max / Min</span>
        <div className="weekly-forecast-temp">
        <span className="weekly-max-temp"> 75°/ </span>
      <span className="weekly-min-temp"> 60°</span>
      </div>
      </div>
      </div>
        </div>
    )
}