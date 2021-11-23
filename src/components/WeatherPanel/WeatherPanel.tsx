import * as React from 'react';
import { CardContent, Typography, Grid } from '@material-ui/core';
import { Weather, Location } from '../../App/types';
import { useStyles } from '../../utils/useStyles';

interface Props {
  weather: Weather;
  location: Location;
}

export default function WeatherPanel({ weather, location }: Props) {
  const classes = useStyles();
  if (!weather) {
    return (
      <CardContent className={classes.cardContentContainer}>
        <Typography component="h4">City not found</Typography>
      </CardContent>
    );
  }
  const { temp, temp_max, temp_min, feels_like, pressure, humidity } = weather;
  const { country, city } = location;
  return (
    <>
      <CardContent className={classes.cardContentContainer}>
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
