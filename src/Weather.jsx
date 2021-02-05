import React, { useState, useEffect } from 'react'
import './weather.css'

function Weather() {
  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()

  const [main, setMain] = useState([]);
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=calgary&appid=385e80a0c4189ee64097904908a6dcdb&units=metric')
      .then(response => response.json())
      .then(response => {
        setLoading(false);
        setMain(response.main)
        setWeather(response.weather)
        setMain(response.main)
      })
      .catch(error => {
        setLoading(false);
        setError(error);
      })
    // }
  }, [])

  console.log(weather)


  return (
    <div className="container">
      <div className="weather">
        <img src={`http://openweathermap.org/img/wn/10d@2x.png`} alt="current weather icon" />
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

export default Weather