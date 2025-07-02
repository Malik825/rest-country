import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CountriesState } from './countries.state';

export const selectCountriesState = createFeatureSelector<CountriesState>('countries');

export const selectAllCountries = createSelector(selectCountriesState, (state) => state.countries);
export const selectFilteredCountries = createSelector(
  selectAllCountries,
  selectCountriesState,
  (countries, state) => {
    return countries.filter(c =>
      c.name.common.toLowerCase().includes(state.searchQuery.toLowerCase()) &&
      (state.filterRegion ? c.region === state.filterRegion : true)
    );
  }
);
export const selectSelectedCountry = createSelector(selectCountriesState, (state) => state.selectedCountry);
export const selectLoading = createSelector(selectCountriesState, (state) => state.loading);
export const selectError = createSelector(selectCountriesState, (state) => state.error);
export const selectSearchQuery = createSelector(selectCountriesState, (state) => state.searchQuery);
export const selectFilterRegion = createSelector(selectCountriesState, (state) => state.filterRegion);
