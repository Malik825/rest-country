import { createAction, props } from '@ngrx/store';
import { Country } from '../models/country.model';

// Load all countries
export const loadCountries = createAction('[Countries] Load Countries');
export const loadCountriesSuccess = createAction('[Countries] Load Countries Success', props<{ countries: Country[] }>());
export const loadCountriesFailure = createAction('[Countries] Load Countries Failure', props<{ error: string }>());

// Load country by code
export const loadCountryByCode = createAction('[Countries] Load Country By Code', props<{ code: string }>());
export const loadCountryByCodeSuccess = createAction('[Countries] Load Country By Code Success', props<{ country: Country }>());
export const loadCountryByCodeFailure = createAction('[Countries] Load Country By Code Failure', props<{ error: string }>());

// UI Interactions
export const setSearchQuery = createAction('[Countries] Set Search Query', props<{ query: string }>());
export const setFilterRegion = createAction('[Countries] Set Filter Region', props<{ region: string }>());
