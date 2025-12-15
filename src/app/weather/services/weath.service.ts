import { inject, Injectable, signal } from '@angular/core';
import { WeathSettings } from '../interfaces/weath-settings.interace';
import { PrecipitationUnit, TemperatureUnit, WindSpeedUnit } from '../interfaces/units.enum';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { GeocodingResponse, LocationUI } from '../interfaces/location.interface';
import { map } from 'rxjs/internal/operators/map';
import { LocationMapper } from '../mapper/location.mapper';
import { Observable } from 'rxjs/internal/Observable';
import { Weather, WeatherUI } from '../interfaces/weather.interface';
import { WeatherMapper } from '../mapper/weather.mapper';

@Injectable({providedIn: 'root'})
export class WeathService {

  /* DI */
  http = inject(HttpClient);

  /* Varibales */
  weathSettings = signal<WeathSettings>(this.defaultSettings());
  weatherDataFinded = signal<WeatherUI | null>(null);

  constructor() { }

  defaultSettings(): WeathSettings {
    return {
      temperature: TemperatureUnit.Celsius,
      windSpeed: WindSpeedUnit.KmH,
      precipitation: PrecipitationUnit.Millimeters
    };
  }

  findLocations(location: string): Observable<LocationUI[]> {
    return this.http.get<GeocodingResponse>(
      `${ environment.geocodingPath }/search?name=${location}&count=10&language=en&format=json`
    ).pipe(
      map(LocationMapper.GeocodingResponseToLocationUIArray)
    )
  }

  searchWeather(location: LocationUI): void{
    this.http.get<Weather>(`${environment.forecastPath}/forecast`, {
      params:{
        latitude: location.latitude,
        longitude: location.longitud,
        timezone: location.timezone,
        current: 'temperature_2m,weather_code,apparent_temperature,relative_humidity_2m,wind_speed_10m,precipitation',
        hourly: 'temperature_2m,weather_code',
        daily: 'temperature_2m_min,temperature_2m_max,weather_code',
        temperature_unit: this.weathSettings().temperature,
        wind_speed_unit: this.weathSettings().windSpeed,
        precipitation_unit: this.weathSettings().precipitation
      }
    })
    .subscribe(result => this.weatherDataFinded.set(WeatherMapper.WeatherToWeatherUI(result,location)));
  }

}
