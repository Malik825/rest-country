import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from './app.routes';
import { countriesReducer } from './features/countries/store/countries.reducer';
import { CountriesEffects } from './features/countries/store/countries.effects';

import { themeReducer } from './features/theme/store/theme.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({ countries: countriesReducer, theme: themeReducer }),
    provideEffects([CountriesEffects]),
    importProvidersFrom(StoreDevtoolsModule.instrument()),
  ],
};
