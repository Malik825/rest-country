import { Country } from '../models/country.model';

export interface CountriesState {
  countries: Country[];
  selectedCountry: Country | null;
  loading: boolean;
  error: string | null;
  searchQuery: string;
  filterRegion: RegionFilter;
}

export type RegionFilter = '' | 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

export const initialCountriesState: CountriesState = {
  countries: [],
  selectedCountry: null,
  loading: false,
  error: null,
  searchQuery: '',
  filterRegion: '',
};
