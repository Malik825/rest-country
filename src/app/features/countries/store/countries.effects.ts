import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as CountriesActions from './countries.actions';
import { CountryApiService } from '../services/country-api.service';
import { catchError, map, mergeMap, of, tap } from 'rxjs';

@Injectable()
export class CountriesEffects {
  loadCountries$;
  loadCountryByCode$;

  constructor(
    private actions$: Actions,
    private countryApi: CountryApiService
  ) {
    this.loadCountries$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CountriesActions.loadCountries),
        mergeMap(() =>
          this.countryApi.getAllCountries().pipe(
            map((countries) =>
              CountriesActions.loadCountriesSuccess({ countries })
            ),
            catchError((error) =>
              of(CountriesActions.loadCountriesFailure({ error: error.message || 'Unknown error' }))
            )
          )
        )
      )
    );

    this.loadCountryByCode$ = createEffect(() =>
      this.actions$.pipe(
        ofType(CountriesActions.loadCountryByCode),
        mergeMap((action) =>
          this.countryApi.getCountryByCode(action.code).pipe(
            map((country) =>
              CountriesActions.loadCountryByCodeSuccess({ country })
            ),
            catchError((error) =>
              of(CountriesActions.loadCountryByCodeFailure({ error: error.message || 'Unknown error' }))
            )
          )
        )
      )
    );
  }
}
