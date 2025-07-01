import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { toggleTheme } from '../../theme/store/theme.actions';
import { selectTheme } from '../../theme/store/theme.selectors';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private store = inject(Store);
  theme$: Observable<string>;

  constructor() {
    this.theme$ = this.store.pipe(
      select(selectTheme),
      tap(theme => {
        console.log(`[ThemeService] Applying theme: ${theme}`);
        document.documentElement.className = theme; // Update class instead of data-theme
        try {
          localStorage.setItem('theme', theme);
          console.log(`[ThemeService] Saved theme to localStorage: ${theme}`);
        } catch (error) {
          console.error('[ThemeService] Failed to save theme to localStorage:', error);
        }
      }),
      catchError(error => {
        console.error('[ThemeService] Error selecting theme:', error);
        return of('light'); // Fallback to default theme
      })
    );
  }

  toggleTheme(): void {
    console.log('[ThemeService] Dispatching toggleTheme action');
    this.store.dispatch(toggleTheme());
  }

  getCurrentTheme(): Observable<string> {
    return this.theme$;
  }
}