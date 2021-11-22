import { Button, Container, makeStyles, Card } from '@material-ui/core';
import weatherData from '../components/WeatherPanel/weatherData';
import WeatherPanel from '../components/WeatherPanel/WeatherPanel';
import { UserInputs } from '../components/UserInputs';

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
  const classes = useStyles();
  return (
    <div>
      <main className={classes.layout}>
        <Container maxWidth="sm" className={classes.container}>
          <Card raised={true} className={classes.cardLayout}>
            <UserInputs />
            <WeatherPanel weather={main} />
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
