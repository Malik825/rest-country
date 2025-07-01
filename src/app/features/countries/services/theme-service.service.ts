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
  readonly theme$: Observable<string>;

  constructor() {
    this.theme$ = this.store.pipe(
      select(selectTheme),
      tap((theme) => {
        document.documentElement.className = theme;
        try {
          localStorage.setItem('theme', theme);
        } catch {}
      }),
      catchError(() => of('light'))
    );
  }

  toggleTheme(): void {
    this.store.dispatch(toggleTheme());
  }

  getCurrentTheme(): Observable<string> {
    return this.theme$;
  }
}
