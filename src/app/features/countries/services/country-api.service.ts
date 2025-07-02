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

  getCountryByCode(code: string): Observable<Country> {
    return this.http.get<Country[]>(`${this.BASE_URL}/alpha/${code}`).pipe(
      map((data) => data[0]),
      catchError(this.handleError)
    );
  }

  getCountriesByCodes(codes: string[]): Observable<Country[]> {
    const joinedCodes = codes.join(',');
    return this.http
      .get<Country[]>(`${this.BASE_URL}/alpha?codes=${joinedCodes}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    const message =
      error.error instanceof ErrorEvent
        ? `Client error: ${error.error.message}`
        : `Server error: ${error.status} ${error.statusText}`;

    console.error('API Error:', message);
    return throwError(() => new Error(message));
  }
}
