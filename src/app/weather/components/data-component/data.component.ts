import { Component, signal } from '@angular/core';
import { DataCurrentComponent } from './data-current/data-current.component';
import { ScrollWeekComponent } from './scroll-week/scroll-week.component';

@Component({
  selector: 'data-component',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
  imports: [DataCurrentComponent, ScrollWeekComponent]
})
export class DataComponent {

}
