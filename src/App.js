import React, { useState, useEffect } from 'react'
import './weather.css'

function App() {
  const [main, setMain] = useState([]);
  const [icon, setIcon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=${API_KEY}&units=metric`)
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setMain(response.main)
        setIcon(response.weather[0].icon)
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
    // }
  }, [])
  return (
    <div className="container">
      <div className="weather">
        <img src={icon ? `http://openweathermap.org/img/wn/${icon}@2x.png` : `...`} alt="" />
        <h2 className="temp">
          {
            loading ? 'Loading...' : Math.round(Number(JSON.stringify(main.temp)))
          }&deg;
        </h2>
        <h3>Calgary, AB</h3>
        <p>{new Date().toLocaleString('default', { weekday: 'long' })}</p>
        <p>
          {new Date().toLocaleString('default', { month: 'long' })}{' '}
          {new Date().toLocaleDateString('default', { day: 'numeric' })},{' '}
          {new Date().toLocaleDateString('default', { year: 'numeric' })}
        </p>
      </div>
    </div>
  )
}

export default App;