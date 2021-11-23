import getCountryCodes from '../App/assets/countryCodes';
import { CountryCode } from '../App/types';

export const fetchWeather = (city: string, countryCode: string) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}, ${countryCode}&appid=${process.env.API_KEY}&units=metric`;

  console.log('URL', url);
  console.log('fetching weather for city, country', city, countryCode);

  return fetch(url);
};

export const findCountryCode = (country: string) => {
  let countryCodes = getCountryCodes();
  let re = new RegExp(country, 'i');
  let code = countryCodes.filter((data) => re.test(data.Name));
  console.log(code);

  return code as CountryCode[];
};

export const validate = (userInput: string) => {
  if (isAlpha(userInput) && userInput.length > 1) {
    return formatUserInput(userInput);
  } else {
    return new Error('Value must be alphanumeric');
  }
};

export const isAlpha = (userInput: string) => {
  let allowedChars = /^[a-zA-Z ]*$/;

  if (userInput.match(allowedChars)) {
    return true;
  }

  return false;
};

const formatUserInput = (userInput: string) => {
  let trimmed = userInput.trim();
  return trimmed;
};
