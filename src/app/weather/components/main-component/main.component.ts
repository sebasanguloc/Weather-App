import { Component, effect, inject, signal } from '@angular/core';
import { WeathService } from '../../services/weath.service';
import { WeatherUI } from '../../interfaces/weather.interface';
import { DataComponent } from '../data-component/data.component';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [DataComponent]
})
export class MainComponent {

  weathService = inject(WeathService);

  weatherData = signal<WeatherUI | null>(null);

  updateWeatherData = effect(() => {
    this.weatherData.set(this.weathService.weatherDataFinded());
  });


}
