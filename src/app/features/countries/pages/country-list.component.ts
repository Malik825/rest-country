import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Country } from '../models/country.model';
import {
  loadCountries,
  setSearchQuery,
  setFilterRegion,
} from '../store/countries.actions';
import {
  selectAllCountries,
  selectFilterRegion,
  selectLoading,
  selectSearchQuery,
} from '../store/countries.selectors';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { CountryCardComponent } from "../components/country-card.component";

@Component({
  selector: 'app-country-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, CountryCardComponent],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.scss',
})
export class CountryListPage {
  private store = inject(Store);

  // Reactive form control for search
  searchControl = new FormControl('', { nonNullable: true });
  regionControl = new FormControl('', { nonNullable: true });

  // Signals for state management
  loading = this.store.selectSignal(selectLoading);
  countries = this.store.selectSignal(selectAllCountries);
  searchQuery = this.store.selectSignal(selectSearchQuery);
  filterRegion = this.store.selectSignal(selectFilterRegion);
  country = signal<Country | null>(null);
  // Computed signal for filtered countries
  filteredCountries = computed(() => {
    const query = this.searchQuery().toLowerCase().trim();
    const region = this.filterRegion();
    return this.countries().filter(
      (country) =>
        country.name.common.toLowerCase().includes(query) &&
        (!region || country.region === region)
    );
  });

  constructor() {
    // Dispatch initial load
    this.store.dispatch(loadCountries());

    // Subscribe to search input changes with debounce
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((value) =>
        this.store.dispatch(setSearchQuery({ query: value }))
      );

    // Subscribe to region filter changes
    this.regionControl.valueChanges.subscribe((value) =>
      this.store.dispatch(setFilterRegion({ region: value }))
    );
  }
}