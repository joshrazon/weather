import getCountryCodes from '../assets/countryCodes';
import { CountryCode } from '../types';

export const fetchWeather = () => {};

export const findCountryCode = (country: string) => {
  let countryCodes = getCountryCodes();
  let re = new RegExp(country, 'i');
  let code = countryCodes.filter((data) => re.test(data.Name));
  console.log(code);
  return code as CountryCode[];
};
