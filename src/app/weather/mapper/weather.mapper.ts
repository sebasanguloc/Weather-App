import { LocationUI } from "../interfaces/location.interface";
import { CurrentDay, DailyUnits, Day, Hour, Weather, WeatherUI } from "../interfaces/weather.interface";
import moment from 'moment';
export class WeatherMapper {

  static objectHour: Record<string, string>  = {
    "00": '12 AM',
    '01': '1 AM',
    '02': '2 AM',
    '03': '3 AM',
    '04': '4 AM',
    '05': '5 AM',
    '06': '6 AM',
    '07': '7 AM',
    '08': '8 AM',
    '09': '9 AM',
    '10': '10 AM',
    '11': '11 AM',
    '12': '12 PM',
    '13': '1 PM',
    '14': '2 PM',
    '15': '3 PM',
    '16': '4 PM',
    '17': '5 PM',
    '18': '6 PM',
    '19': '7 PM',
    '20': '8 PM',
    '21': '9 PM',
    '22': '10 PM',
    '23': '11 PM',

  }

  static WeatherToWeatherUI(weather: Weather, locationUI: LocationUI): WeatherUI {
    moment.locale('en');
    const dateWeather = moment(weather.current.time).format('dddd, MMM D, YYYY');

    const currentDay: CurrentDay = {
      location: locationUI,
      date: dateWeather,
      weatherCode: weather.current.weather_code,
      temperature: Math.round(weather.current.temperature_2m),
      feelsLike: Math.round(weather.current.apparent_temperature),
      humidity: Math.round(weather.current.relative_humidity_2m),
      wind: Math.round(weather.current.wind_speed_10m),
      precipitation: Math.round(weather.current.precipitation),
    };

    const daysDate: string[] = weather.daily.time;
    const daysName: string[] = daysDate.map(d => moment(d).format('dddd'));
    const hoursPerDay: string[][] = WeatherMapper.divideData<string>(weather.hourly.time);
    const temperaturePerHour: number[][] = WeatherMapper.divideData<number>(weather.hourly.temperature_2m);
    const weatherCodePerHour: number[][] = WeatherMapper.divideData<number>(weather.hourly.weather_code);

    const temperaturesMax: number[] = weather.daily.temperature_2m_max;
    const temperaturesMin: number[] = weather.daily.temperature_2m_min;
    const weatherCodes: number[] = weather.daily.weather_code;
    const days: Day[] = [];

    for(let i = 0; i < 7; i++){
      const day = daysName[i];
      const date = daysDate[i];
      const temperatureMax = temperaturesMax[i];
      const temperatureMin = temperaturesMin[i];
      const weatherCode = weatherCodes[i];
      let hours: Hour[] = [];

      for(let y = 0; y < 24; y++){
        const hour: Hour = {
          time: this.objectHour[moment(hoursPerDay[i][y]).format('HH').toString()],
          // time: hoursPerDay[i][y],
          temperature: temperaturePerHour[i][y],
          weatherCode: weatherCodePerHour[i][y]
        }
        hours.push(hour);
      }

      const dayData: Day = {
        day,
        date,
        temperatureMax,
        temperatureMin,
        weatherCode,
        hours
      };
      days.push(dayData);
    }

    return {
      currentDay,
      days
    };
  }

  /*
    daysName: string[]
    dates: string[]
    - temperatureMax: number[]
    - temperatureMin: number[]
    - weatherCodes: number[]
  */
  static divideData<T>(array: T[]): T[][] {
    const result:T[][] = [];
    let base: T[] = [];
    for(let i = 0; i < array.length; i++){
      const data = array[i];
      base.push(data);
      if((i+1) % 24 == 0){
        result.push(base);
        base = [];
        continue;
      }
    }
    return result;
  }

}
