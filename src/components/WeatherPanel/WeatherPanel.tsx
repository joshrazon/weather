import * as React from 'react';
import {
  makeStyles,
  CardContent,
  Typography,
  Theme,
  createStyles,
  Grid,
} from '@material-ui/core';
import { Weather, Location } from '../../App/types';

interface Props {
  weather: Weather;
  location: Location;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    city: {
      marginBottom: theme.spacing(3),
    },
    pos: {
      marginBottom: 12,
    },
    layout: {
      display: 'flex',
      flexDirection: 'column',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    temp: {
      fontSize: '45px',
    },
  })
);

export default function WeatherPanel({ weather, location }: Props) {
  const classes = useStyles();
  if (!weather) {
    return (
      <CardContent className={classes.container}>
        <Typography component="h4">City not found</Typography>
      </CardContent>
    );
  }
  const { temp, temp_max, temp_min, feels_like, pressure, humidity } = weather;
  const { country, city } = location;
  return (
    <>
      <CardContent className={classes.container}>
        <Typography
          className={classes.city}
          color="textPrimary"
          variant="h3"
          component="h3"
        >
          {city}
        </Typography>
        <Typography variant="h2" component="h2">
          {Math.round(temp) || '-'}&#176;
          <span className={classes.temp}>C</span>
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Feels Like: {feels_like} &#176; C
        </Typography>
      </CardContent>
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" align="center">
              Min: {temp_min || '-'} &#176; C
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Max: {temp_max || '-'} &#176; C
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" component="p" align="center">
              Pressure: {pressure || '-'}
            </Typography>
            <Typography variant="body2" component="p" align="center">
              Humidity: {humidity || '-'}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
}
