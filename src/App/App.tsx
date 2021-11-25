import { Button, Container, Box, Card, Typography } from '@material-ui/core';
import weatherData from '../components/WeatherPanel/weatherData';
import WeatherPanel from '../components/WeatherPanel/WeatherPanel';
import { UserInputs } from '../components/UserInputs';
import { useState } from 'react';
import { Weather, Location } from './types';
import { fetchWeather } from '../utils';
import Loading from '../components/Loading/Loading';
import { useStyles } from '../utils/useStyles';

export default function App() {
  const { main } = weatherData;
  const tempLocation = { city: 'Calgary', country: 'CA' };
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [location, setLocation] = useState<Location>({} as Location);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const classes = useStyles();

  const requestWeather = async (city: string, countryCode: string) => {
    setLoading(true);

    let response = await fetchWeather(city, countryCode);
    let data = await response.json();
    console.log('response from fetch request', data);
    handleWeatherResponse(data);

    return setLoading(false);
  };

  const handleWeatherResponse = (data: any) => {
    if (data.main) {
      let newLocation: Location = { city: data.name, country: data.sys.country };
      setLocation(newLocation);
      setWeather(data.main);
    } else {
      // HANDLE ERROR HERE
      console.log(data.message);
      setError(true);
    }

    if (error) {
      setError(false);
    }

    return setLoading(false);
  };

  const toggleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div>
      <main className={classes.layout}>
        <Container maxWidth="sm" className={classes.container}>
          <Card raised={true} className={classes.cardLayout}>
            <UserInputs requestWeather={requestWeather} />
            {error && (
              <Container maxWidth="sm" className={classes.cardLayout}>
                <Typography className={classes.error} component="span" variant="body2">
                  City not found
                </Typography>
              </Container>
            )}

            {loading ? (
              <Loading />
            ) : (
              <WeatherPanel weather={weather} location={location} />
            )}
          </Card>
        </Container>
      </main>
    </div>
  );
}
