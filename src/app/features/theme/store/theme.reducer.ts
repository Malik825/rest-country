import { createReducer, on } from '@ngrx/store';
import { toggleTheme } from './theme.actions';

export interface ThemeState {
  theme: string;
}

export const initialState: ThemeState = {
  theme: localStorage.getItem('theme') || 'light',
};

export const themeReducer = createReducer(
  initialState,
  on(toggleTheme, state => {
    console.log(`[Reducer] Toggling theme from ${state.theme}`);
    return {
      ...state,
      theme: state.theme === 'light' ? 'dark' : 'light',
    };
  })
);