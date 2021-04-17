import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import './weather.css'

function App() {
  // Initialize state using hooks
  const [main, setMain] = useState([]);
  const [icon, setIcon] = useState([]);
  const [country, setCountry] = useState('CA');
  const [city, setCity] = useState('calgary');
  const [loading, setLoading] = useState(true);

  // get api key from env
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    // Async functions go into useEffect
    // 2nd args is an array of dependencies used as trigger for calling useEffect 

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setMain(response.main)
        setIcon(response.weather[0].icon)
        setCountry(response.sys.country)
      })
      .catch(error => {
        setLoading(false);
      })
    // }
  }, [city, API_KEY])

  // Return HTML by using JSX
  return (
    <div className="container">
      <div className="weather">
        {/* Open weather icon link where the variable "icon" comes from api response */}
        <img src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : `...`} alt="" />
        <h2 className="temp">
          {/* Ternary operator for dynamic rendering; If we have response, display response; otherwise display loading... */}
          {
            loading ? 'Loading...' : Math.round(Number(JSON.stringify(main.temp)))
          }&deg;
        </h2>
        <h3>{city}, {country}</h3>
        {/* Render current date */}
        <p>{new Date().toLocaleString('default', { weekday: 'long' })}</p>
        <p>
          {new Date().toLocaleString('default', { month: 'long' })}{' '}
          {new Date().toLocaleDateString('default', { day: 'numeric' })},{' '}
          {new Date().toLocaleDateString('default', { year: 'numeric' })}
        </p>
        {/* input for which city weather you want to display */}
        <SearchBox updateCity={setCity} />
      </div>
    </div>
  )
}

export default App;