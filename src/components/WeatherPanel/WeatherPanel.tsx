import * as React from 'react';
import { useState } from 'react';
import {
  makeStyles,
  CardContent,
  Typography,
  Button,
  Theme,
  createStyles,
} from '@material-ui/core';
import { Weather } from '../../App/types';
import { findCountryCode } from '../../App/utils/http-requests';

interface Props {
  weather: Weather;
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
    title: {
      fontSize: 14,
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
  })
);

export default function WeatherPanel({ weather }: Props) {
  const classes = useStyles();
  const { temp, temp_max, temp_min, feels_like, pressure, humidity } = weather;

  return (
    <>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Temp:
        </Typography>
        <Typography variant="h2" component="h2">
          {temp}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Feels Like: {feels_like}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" component="p">
          Min: {temp_min}
        </Typography>
        <Typography variant="body2" component="p">
          Max: {temp_max}
        </Typography>
        <Typography variant="body2" component="p">
          Pressure: {pressure}
        </Typography>
        <Typography variant="body2" component="p">
          Humidity: {humidity}
        </Typography>
        <Button variant="contained" onClick={() => findCountryCode('korea')}>
          Log Country Code
        </Button>
      </CardContent>
    </>
  );
}
