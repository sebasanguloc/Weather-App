import { Component, effect, inject, signal } from '@angular/core';
import { WeathService } from '../../../../services/weath.service';
import { Day } from '../../../../interfaces/weather.interface';
import { WEATHER_ICON_MAP } from '../../../../constants/weather-icon-map';

@Component({
  selector: 'daily-forecast-component',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent {

  weatherService = inject(WeathService);

  dailyForecastInfo = signal<Day[] | null>(null);

  weatherIconsMapper = WEATHER_ICON_MAP;

  updateDailyForecastInfo = effect(() => {
    this.dailyForecastInfo.set(this.weatherService.weatherDataFinded()?.days ?? null);
  });
}
