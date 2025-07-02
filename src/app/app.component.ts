import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryListPage } from "./features/countries/pages/country-list.component";
import { HeaderComponent } from './features/countries/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rest-countries-app';
}
