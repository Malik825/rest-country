import { Component, OnInit, computed, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Country } from '../models/country.model';
import { CountryApiService } from '../services/country-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-country-details',
  standalone: true,
  templateUrl: './country-details.component.html',
  styleUrl: './country-details.component.scss',
  imports: [CommonModule, RouterModule]
})
export class CountryDetailsPage implements OnInit {
  private _country = signal<Country | null>(null);
  readonly countrySignal = this._country.asReadonly();
  allCountries = signal<Country[]>([]);
  constructor(private route: ActivatedRoute, private countryService: CountryApiService) {}


ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
  const code = params.get('code');
  if (code) {
    this.countryService.getCountryByCode(code).subscribe((country) => {
      this._country.set(country);
      console.log(country);
    });
  }
});


  this.countryService.getAllCountries().subscribe((countries) => {
    this.allCountries.set(countries);
  });
}

  nativeName(): string {
    const native = this.countrySignal()?.name?.nativeName;
    return native ? Object.values(native)[0]?.common : '—';
  }

  currencyList(): string {
    const currencies = this.countrySignal()?.currencies;
    return currencies ? Object.values(currencies).map(c => c.name).join(', ') : '—';
  }

  languageList(): string {
    const langs = this.countrySignal()?.languages;
    return langs ? Object.values(langs).join(', ') : '—';
  }
  getCountryName(code: string): string {
  const found = this.allCountries().find((c) => c.cca3 === code);
  return found?.name.common ?? code;
}

}
