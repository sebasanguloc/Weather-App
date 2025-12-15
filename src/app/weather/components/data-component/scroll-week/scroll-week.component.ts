import { Component, computed, effect, inject, signal } from '@angular/core';
import { WeathService } from '../../../services/weath.service';
import { Day } from '../../../interfaces/weather.interface';
import moment from 'moment';
import { WEATHER_ICON_MAP } from '../../../constants/weather-icon-map';

@Component({
  selector: 'scroll-week-component',
  templateUrl: './scroll-week.component.html',
  styleUrls: ['./scroll-week.component.css']
})
export class ScrollWeekComponent {

  weatherService = inject(WeathService);

  weatherIconsMapper = WEATHER_ICON_MAP;

  daySelected = signal<Day>(this.weatherService.weatherDataFinded()?.days[0]!);
  days = signal<Day[]>(this.weatherService.weatherDataFinded()?.days!);

  changeDaySelected(newDay: Day) {
    this.daySelected.set(newDay);
  }

  hoursDaySelected = computed(() => this.daySelected().hours);

}
