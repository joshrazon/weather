import {
  Typography,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';

import * as React from 'react';
import { useState } from 'react';
import { ConfirmCountry, Country } from './Country';
import { City } from './City';
import { findCountryCode, validate } from '../../utils';
import { CountryCode } from '../../App/types';

type Props = {
  requestWeather: Function;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    button: {
      display: 'none',
    },
    error: {
      color: 'red',
      fontSize: '12px',
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
    },
  })
);

function UserInputs({ requestWeather }: Props) {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [foundCountries, setFoundCountries] = useState<CountryCode[]>([]);
  const [countryError, setCountryError] = useState<boolean>(false);
  const [characterError, setCharacterError] = useState<boolean>(false);

  const classes = useStyles();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let cityInput = validate(city);
    let countryInput = validate(country);

    if (typeof cityInput === 'string' && typeof countryInput === 'string') {
      return processCountryInput(countryInput);
    } else {
      return setCharacterError(true);
    }
  };

  const processCountryInput = (countryInput: string) => {
    let countryCodes = findCountryCode(countryInput);
    switch (countryCodes.length) {
      case 0: {
        console.log('no country codes found');
        return toggleCountryError(true);
      }

      case 1: {
        let countryCode = countryCodes[0].Code;
        setCountry(countryCode);
        toggleCountryError(false);
        return requestWeather(validate(city), countryCode);
      }

      default: {
        console.log('Found country codes:', countryCodes);
        return setFoundCountries(countryCodes);
      }
    }
  };

  const toggleCountryError = (show: boolean) => {
    setCountryError(show);
  };

  const onConfirmCountry = (countryCode: CountryCode) => {
    console.log('confirm country code', countryCode);
    setFoundCountries([countryCode]);
    return requestWeather(city, countryCode);
  };

  return (
    <CardContent>
      <form onSubmit={handleSubmit}>
        <City
          userInput={city}
          setUserInput={setCity}
          disabled={foundCountries.length > 1}
        />
        <Country
          userInput={country}
          setUserInput={setCountry}
          disabled={foundCountries.length > 1}
        />
        <button type="submit" className={classes.button}>
          submit
        </button>
      </form>
      {countryError && (
        <Typography className={classes.error}>
          Country not found, please specify a different country
        </Typography>
      )}
      {characterError && (
        <Typography className={classes.error}>
          Inputs should only contain alphabet characters
        </Typography>
      )}
      <ConfirmCountry countryCodes={foundCountries} confirm={onConfirmCountry} />
    </CardContent>
  );
}

export default UserInputs;
