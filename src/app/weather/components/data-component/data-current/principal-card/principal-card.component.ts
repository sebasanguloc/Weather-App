import { Component, effect, inject, signal } from '@angular/core';
import { WeathService } from '../../../../services/weath.service';
import { LocationUI } from '../../../../interfaces/location.interface';
import { CurrentDay } from '../../../../interfaces/weather.interface';
import { WEATHER_ICON_MAP } from '../../../../constants/weather-icon-map';

@Component({
  selector: 'pincipal-card-component',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent {
  backgroundImageUrl = signal<string>('images/bg-today-small.svg');

  weatherService = inject(WeathService);

  infoCard = signal<CurrentDay | null>(null);

  weatherIconsMap = signal<string>('');

  updateInfoCard = effect(() => {
    this.infoCard.set(this.weatherService.weatherDataFinded()?.currentDay ?? null);
  this.weatherIconsMap.set(WEATHER_ICON_MAP[this.infoCard()?.weatherCode!]);
  });

}
