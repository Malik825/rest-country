// localstorage.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    } catch (e) {
      console.error('LocalStorage get error:', e);
      return null;
    }
  }

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('LocalStorage set error:', e);
    }
  }

  // Add a specific method for theme to enforce 'light' | 'dark'
// localstorage.service.ts
getTheme(): 'light' | 'dark' | null {
  const value = this.get<string>('theme');
  console.log('Retrieved theme from localStorage:', value); // Debug log
  return value === 'light' || value === 'dark' ? value : null;
}
}