import { TemperatureUnit, PrecipitationUnit, WindSpeedUnit } from "./units.enum";

export interface WeathSettings {
  temperature: TemperatureUnit;
  windSpeed: WindSpeedUnit;
  precipitation: PrecipitationUnit;
}
