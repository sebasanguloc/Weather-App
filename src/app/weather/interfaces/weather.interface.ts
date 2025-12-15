import { LocationUI } from "./location.interface";

export interface Weather {
  latitude:              number;
  longitude:             number;
  generationtime_ms:     number;
  utc_offset_seconds:    number;
  timezone:              string;
  timezone_abbreviation: string;
  elevation:             number;
  current_units:         CurrentUnits;
  current:               Current;
  hourly_units:          HourlyUnits;
  hourly:                Hourly;
  daily_units:           DailyUnits;
  daily:                 Daily;
}

export interface Current {
  time:                 string;
  interval:             number;
  temperature_2m:       number; /* temperature */
  weather_code:         number; /* weatherCode */
  relative_humidity_2m: number; /* feelsLike */
  apparent_temperature: number; /* humidity */
  wind_speed_10m:       number; /* wind */
  precipitation:        number; /* precipitation */
}

export interface CurrentUnits {
  time:                 string;
  interval:             string;
  temperature_2m:       string;
  weather_code:         string;
  apparent_temperature: string;
  relative_humidity_2m: string;
  wind_speed_10m:       string;
  precipitation:        string;
}

export interface Daily {
  time:               string[];
  temperature_2m_min: number[];
  temperature_2m_max: number[];
  weather_code:       number[];
}

export interface DailyUnits {
  time:               string;
  temperature_2m_min: string;
  temperature_2m_max: string;
  weather_code:       string;
}

export interface Hourly {
  time:           string[];
  temperature_2m: number[];
  weather_code:   number[];
}

export interface HourlyUnits {
  time:           string;
  temperature_2m: string;
  weather_code:   string;
}

/* WEATHER UI*/

export interface WeatherUI {
  currentDay: CurrentDay;
  days: Day[]
}

export interface CurrentDay {
  location: LocationUI;
  date: string;
  weatherCode: number;
  temperature: number;
  feelsLike: number;
  humidity: number;
  wind: number;
  precipitation: number;
}

export interface Day {
  day: string;
  date: string;
  temperatureMax: number;
  temperatureMin: number;
  weatherCode: number;
  hours: Hour[];
}

export interface Hour {
  time: string;
  temperature: number;
  weatherCode:number;
}

