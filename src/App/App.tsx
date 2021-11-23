import { Button, Container, makeStyles, Card } from '@material-ui/core';
import weatherData from '../components/WeatherPanel/weatherData';
import WeatherPanel from '../components/WeatherPanel/WeatherPanel';
import { UserInputs } from '../components/UserInputs';
import { useState } from 'react';
import { Weather, Location } from './types';
import { fetchWeather } from '../utils';
import Loading from '../components/Loading/Loading';

const useStyles = makeStyles((theme) => ({
  layout: {
    height: '100vh',
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: 'max-content',
  },
  cardLayout: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function App() {
  const { main } = weatherData;
  const tempLocation = { city: 'Calgary', country: 'CA' };
  const [weather, setWeather] = useState<Weather>({} as Weather);
  const [location, setLocation] = useState<Location>({} as Location);
  const [loading, setLoading] = useState<boolean>(false);
  const classes = useStyles();

  const requestWeather = async (city: string, countryCode: string) => {
    setLoading(true);
    let response = await fetchWeather(city, countryCode);
    let data = await response.json();

    if (data.main) {
      console.log('response from fetch request', data);
      return handleWeatherResponse(data);
    } else {
      setLoading(false);
    }
  };

  const handleWeatherResponse = (data: any) => {
    if (data.main) {
      let newLocation: Location = { city: data.name, country: data.sys.country };
      setLocation(newLocation);
      setWeather(data.main);
      return setLoading(false);
    } else {
      return console.log(data.message);
    }
  };

  const handleLoading = () => {
    setLoading(!loading);
  };

  return (
    <div>
      <main className={classes.layout}>
        <Container maxWidth="sm" className={classes.container}>
          <Card raised={true} className={classes.cardLayout}>
            <UserInputs requestWeather={requestWeather} />

            {loading ? (
              <Loading />
            ) : (
              <WeatherPanel weather={weather} location={location} />
            )}

            <Button onClick={handleLoading}>Toggle Loading</Button>
          </Card>
        </Container>
      </main>
    </div>
  );
}

/**
 * name
 * sys.country
 * main
 */
