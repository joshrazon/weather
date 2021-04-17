import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import Location from './Location'
import GetDate from './Date'
import './weather.css'
import nightBg from './weather-app-bg.jpg';
import dayBg from './weather-app-bg-og.jpg';

function App() {
  // Initialize state using hooks
  const [main, setMain] = useState([]);
  const [description, setDescription] = useState('');
  const [country, setCountry] = useState('CA');
  const [city, setCity] = useState('calgary');
  const [loading, setLoading] = useState(true);

  // get api key from env
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  // dynamically update background based on current hour
  const changeBg = () => {
    if (new Date().getHours() > 17) {
      return nightBg
    } else {
      return dayBg
    }
  }

  // app container styles
  const dynamicBg = {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(./weather-app-bg.jpg)',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',


    backgroundImage: 'url(' + changeBg() + ')',
    backgroundPosition: 'center bottom',
    backgroundSize: 'cover',
  };

  useEffect(() => {

    // Async functions go into useEffect
    // 2nd args is an array of dependencies used as trigger for calling useEffect 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setMain(response.main)
        setDescription(response.weather[0].description)
        setCountry(response.sys.country)
      })
      .catch(error => {
        setLoading(false);
      })

  }, [city, API_KEY])

  // Return HTML by using JSX syntax
  return (
    <div className="container" style={dynamicBg}>
      <div className="weather">
        <div className="app-header">
          <Location city={city} country={country} />
          <GetDate />
        </div>
        <div className="app-details">
          {/* Ternary operator to check if we have our api response; if so display data; otherwise display "description" */}
          <p>
            {loading ? 'description' : description}
          </p>
        </div>
        <div className="app-temp">
          <span className="temp">
            {/* Check api response; if so display data; otherwise display "Loading..." */}
            {
              loading ? 'Loading...' : Math.round(Number(JSON.stringify(main.temp)))
            }&deg;c
          </span>
          <p>25&deg;c / 28&deg;c</p>
        </div>
        {/* input for which city weather you want to display */}
        <SearchBox updateCity={setCity} />
      </div>
    </div>
  )
}

export default App;