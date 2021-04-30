import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import SearchEngine from "./SearchEngine"
import CurrentDay from './CurrentDay';
import WeeklyForecast from "./WeeklyForecast"
import Footer from "./Footer"


ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <div className="react-weather-app">
    <SearchEngine />
    <CurrentDay />
    <WeeklyForecast />
      </div>
    </div>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
