import { Injectable, signal } from '@angular/core';
import { WeathSettings } from '../interfaces/weath-settings.interace';
import { PrecipitationUnit, TemperatureUnit, WindSpeedUnit } from '../interfaces/units.enum';

@Injectable({providedIn: 'root'})
export class WeathService {

  weathSettings = signal<WeathSettings>(this.defaultSettings());

  constructor() { }

  defaultSettings(): WeathSettings {
    return {
      temperature: TemperatureUnit.Celsius,
      windSpeed: WindSpeedUnit.KmH,
      precipitation: PrecipitationUnit.Millimeters
    };
  }

}
