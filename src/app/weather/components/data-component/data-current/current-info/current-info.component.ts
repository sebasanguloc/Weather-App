import { Component, effect, inject, signal } from '@angular/core';
import { CurrentDay, WeatherUI } from '../../../../interfaces/weather.interface';
import { WeathService } from '../../../../services/weath.service';
import { single } from 'rxjs';

@Component({
  selector: 'current-info-component',
  templateUrl: './current-info.component.html',
  styleUrls: ['./current-info.component.css']
})
export class CurrentInfoComponent {

  weatherService = inject(WeathService);

  currentInfo = signal<CurrentDay | null>(null);

  updateCurrentInfo = effect(() => {
    this.currentInfo.set(this.weatherService.weatherDataFinded()?.currentDay ?? null);
  });

}
