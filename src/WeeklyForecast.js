import React from "react"
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeeklyForecast(){
    return (
        <div className="WeeklyForecast">
        <div className="row">
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 80°/ </span>
      <span class="weekly-min-temp">55°</span>
      </div>
      </div>
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_NIGHT"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 70°/ </span>
      <span class="weekly-min-temp">50°</span>
      </div>
      </div>
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLOUDY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 65°/ </span>
      <span class="weekly-min-temp">40°</span>
      </div>
      </div>
      <hr />
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="RAIN"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 60°/ </span>
      <span class="weekly-min-temp">50°</span>
      </div>
      </div>
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="WIND"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 60°/ </span>
      <span class="weekly-min-temp">45°</span>
      </div>
      </div>
        <div class="col-4">
        <div class="weekly-forecast-day"> Friday 06/06/06 </div>
        <ReactAnimatedWeather
    icon="CLEAR_DAY"
    color="WHITE"
    size={50}
    animate={true}
  />
        <span class="max-min"> Max / Min</span>
        <div class="weekly-forecast-temp">
        <span class="weekly-max-temp"> 75°/ </span>
      <span class="weekly-min-temp"> 60°</span>
      </div>
      </div>
      </div>
        </div>
    )
}