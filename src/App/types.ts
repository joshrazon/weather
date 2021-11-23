export type Weather = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
};

export interface CountryCode {
  Code: string;
  Name: string;
}

export interface Location {
  city: string;
  country: string;
}
