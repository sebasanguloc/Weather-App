import { Component, signal } from '@angular/core';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class NombreComponent {

  backgroundImageUrl = signal<string>('images/bg-today-small.svg');

}
