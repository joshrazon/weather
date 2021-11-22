import {
  Typography,
  CardContent,
  makeStyles,
  createStyles,
  Theme,
} from '@material-ui/core';

import * as React from 'react';
import { useState } from 'react';
import ConfirmCountry from './ConfirmCountry';
import { findCountryCode } from '../../App/utils/http-requests';
import { Weather, CountryCode } from '../../App/types';
import { City } from './City';
import { Country } from './Country';

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

function UserInputs() {
  const [city, setCity] = useState<string>('');
  const [country, setCountry] = useState<string>('');
  const [foundCountries, setFoundCountries] = useState<CountryCode[]>([]);
  const [countryError, setCountryError] = useState<boolean>(false);

  const classes = useStyles();

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    let countryResult: CountryCode[] = findCountryCode(country);
    let cityResult: string = formatCityUserInput(city);

    switch (countryResult.length) {
      case 0: {
        showCountryError();
        return console.log('no country codes found');
      }

      case 1: {
        let code = countryResult[0].Code;
        console.log('City and country code:', cityResult, code);
        return setCountry(code);
      }

      default: {
        console.log('Found country codes:', countryResult);
        return setFoundCountries(countryResult);
      }
    }
  };

  const showCountryError = () => {
    setCountryError(true);
  };

  const formatCityUserInput = (userInput: string) => {
    let trimmed = userInput.trim();
    let removedSpaces = trimmed.replace(/\s/g, '');

    return removedSpaces;
  };

  const onConfirmCountry = (countryCode: string) => {
    console.log('City and country code: ', city, countryCode);
    return setCountry(countryCode);
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
      <ConfirmCountry countryCodes={foundCountries} confirm={onConfirmCountry} />
    </CardContent>
  );
}

export default UserInputs;
