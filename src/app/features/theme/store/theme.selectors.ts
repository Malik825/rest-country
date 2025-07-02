import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemeState } from './theme.reducer';

export const selectThemeState = createFeatureSelector<ThemeState>('theme');

export const selectTheme = createSelector(
  selectThemeState,
  (state: ThemeState) => {
    console.log(`[Selector] Selecting theme: ${state.theme}`);
    return state.theme;
  }
);