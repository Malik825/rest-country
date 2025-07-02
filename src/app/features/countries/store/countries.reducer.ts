import { createReducer, on } from '@ngrx/store';
import { initialCountriesState } from './countries.state';
import * as CountriesActions from './countries.actions';

export const countriesReducer = createReducer(
  initialCountriesState,

  on(CountriesActions.loadCountries, (state) => ({ ...state, loading: true })),
  on(CountriesActions.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    countries,
    loading: false,
    error: null,
  })),
  on(CountriesActions.loadCountriesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountriesActions.loadCountryByCode, (state) => ({ ...state, loading: true })),
  on(CountriesActions.loadCountryByCodeSuccess, (state, { country }) => ({
    ...state,
    selectedCountry: country,
    loading: false,
    error: null,
  })),
  on(CountriesActions.loadCountryByCodeFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),

  on(CountriesActions.setSearchQuery, (state, { query }) => ({
    ...state,
    searchQuery: query,
  })),
  on(CountriesActions.setFilterRegion, (state, { region }) => ({
    ...state,
    filterRegion: region,
  }))
);
