import { Component, Input, signal } from '@angular/core';
import { Country } from '../models/country.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-country-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './country-card.component.html',
  styleUrl: './country-card.component.scss'
})
export class CountryCardComponent {
  private _country = signal<Country | null>(null);

  @Input() set country(value: Country) {
    this._country.set(value);
  }

  readonly countrySignal = this._country.asReadonly();
}
