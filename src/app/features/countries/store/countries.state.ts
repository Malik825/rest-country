import { Country } from '../models/country.model';

export interface CountriesState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: string;
}

export const initialCountriesState: CountriesState = {
  countries: [],
  selectedCountry: null,
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: '',
};
