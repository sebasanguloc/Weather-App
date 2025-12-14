import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header-component/header.component";
import { NombreComponent } from "../../components/main-component/main.component";

@Component({
  selector: 'dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css'],
  imports: [HeaderComponent, NombreComponent]
})
export default class DashboardPageComponent {

}
