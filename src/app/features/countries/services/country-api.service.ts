import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Country } from '../models/country.model';

@Injectable({
  providedIn: 'root',
})
export class CountryApiService {
  private readonly BASE_URL = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  /**
   * Fetch all countries with selected fields.
   * Sorted alphabetically by common name.
   */
  getAllCountries(): Observable<Country[]> {
    const fields = [
      'cca3',
      'name',
      'flags',
      'population',
      'region',
      'capital',
      'currencies',
      'languages',
      'borders',
    ].join(',');

    return this.http
      .get<Country[]>(`${this.BASE_URL}/all?fields=${fields}`)
      .pipe(
        map((data) =>
          data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        ),
        catchError(this.handleError)
      );
  }

  /**
   * Fetch a single country by its alpha-3 code (cca3).
   * The API returns an array with one item.
   */
  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country[]>(`${this.BASE_URL}/alpha/${code}`).pipe(
      map((data) => data[0]),
      catchError(this.handleError)
    );
  }

  /**
   * Fetch multiple countries by a list of alpha-3 codes.
   */
  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    const joinedCodes = codes.join(',');
    return this.http
      .get<Country[]>(`${this.BASE_URL}/alpha?codes=${joinedCodes}`)
      .pipe(catchError(this.handleError));
  }

  /**
   * Global HTTP error handler.
   */
  private handleError(error: HttpErrorResponse) {
    const message =
      error.error instanceof ErrorEvent
        ? `Client error: ${error.error.message}`
        : `Server error: ${error.status} ${error.statusText}`;

    console.error('[CountryApiService]', message);
    return throwError(() => new Error(message));
  }
}
