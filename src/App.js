import React, { useState, useEffect } from 'react'
import SearchBox from './SearchBox'
import './weather.css'

function App() {
  const [main, setMain] = useState([]);
  const [icon, setIcon] = useState([]);
  const [country, setCountry] = useState('CA');
  const [city, setCity] = useState('calgary');
  const [loading, setLoading] = useState(true);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {

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
  return (
    <div className="container">
      <div className="weather">
        <img src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : `...`} alt="" />
        <h2 className="temp">
          {
            loading ? 'Loading...' : Math.round(Number(JSON.stringify(main.temp)))
          }&deg;
        </h2>
        <h3>{city}, {country}</h3>
        <p>{new Date().toLocaleString('default', { weekday: 'long' })}</p>
        <p>
          {new Date().toLocaleString('default', { month: 'long' })}{' '}
          {new Date().toLocaleDateString('default', { day: 'numeric' })},{' '}
          {new Date().toLocaleDateString('default', { year: 'numeric' })}
        </p>
        <SearchBox updateCity={setCity} />
      </div>
    </div>
  )
}

export default App;