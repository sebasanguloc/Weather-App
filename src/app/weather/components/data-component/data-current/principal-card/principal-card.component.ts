import { Component, signal } from '@angular/core';

@Component({
  selector: 'pincipal-card-component',
  templateUrl: './principal-card.component.html',
  styleUrls: ['./principal-card.component.css']
})
export class PrincipalCardComponent {
  backgroundImageUrl = signal<string>('images/bg-today-small.svg');

}
