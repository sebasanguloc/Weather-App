import { Component, signal } from '@angular/core';
import { PrincipalCardComponent } from './principal-card/principal-card.component';
import { CurrentInfoComponent } from './current-info/current-info.component';
import { DailyForecastComponent } from "./daily-forecast/daily-forecast.component";

@Component({
  selector: 'data-current-component',
  templateUrl: './data-current.component.html',
  styleUrls: ['./data-current.component.css'],
  imports: [PrincipalCardComponent, CurrentInfoComponent, DailyForecastComponent]
})
export class DataCurrentComponent {
}
