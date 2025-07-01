import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { toggleTheme } from './theme.actions';

@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);

  persistTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(toggleTheme),
        tap(() => {
          const currentTheme = document.documentElement.getAttribute('data-theme');
          const newTheme = currentTheme === 'light' ? 'dark' : 'light';
          localStorage.setItem('theme', newTheme);
        })
      ),
    { dispatch: false }
  );
}