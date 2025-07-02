import { Injectable, inject } from '@angular/core';
import { Actions } from '@ngrx/effects';

// Placeholder for future effects; persistence handled in ThemeService
@Injectable()
export class ThemeEffects {
  private actions$ = inject(Actions);
}