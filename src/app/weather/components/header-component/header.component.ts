import { Component, inject, output, signal } from '@angular/core';
import { WeathService } from '../../services/weath.service';
import { PrecipitationUnit, TemperatureUnit, WindSpeedUnit } from '../../interfaces/units.enum';
import { LocationUI } from '../../interfaces/location.interface';
import { WeatherUI } from '../../interfaces/weather.interface';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: []
})
export class HeaderComponent {

  weathService = inject(WeathService);

  locations = signal<LocationUI[]>([]);
  locationInput = signal<string>('');

  temperature = signal<TemperatureUnit>(this.weathService.weathSettings().temperature);
  windSpeed = signal<WindSpeedUnit>(this.weathService.weathSettings().windSpeed);
  precipitation = signal<PrecipitationUnit>(this.weathService.weathSettings().precipitation);

  readonly TemperatureUnit = TemperatureUnit;
  readonly WindSpeedUnit = WindSpeedUnit;
  readonly PrecipitationUnit = PrecipitationUnit;

  setTemperature(unit: TemperatureUnit) {
    this.weathService.weathSettings.update(s =>({...s,temperature: unit}));
  }

  setWindSpeed(unit: WindSpeedUnit) {
    this.weathService.weathSettings.update(s =>({...s,windSpeed: unit}));
  }

  setPrecipitation(unit: PrecipitationUnit){
    this.weathService.weathSettings.update(s =>({...s,precipitation: unit}));
    this.weathService.searchWeather(this.weathService.weatherDataFinded()?.currentDay.location!);
  }

  searchLocation(location: string){
    this.locationInput.set(location);
    this.cleanLocations();
    this.weathService.findLocations(location).subscribe(locationsApi => this.locations.set(locationsApi));
  }

  cleanLocations(){
    this.locations.set([]);
  }

  searchWeather(location: LocationUI) {
    this.weathService.searchWeather(location);
  }

}

