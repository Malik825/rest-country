import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) as T : null;
    } catch {
      return null;
    }
  }

  set(key: string, value: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {}
  }

  getTheme(): 'light' | 'dark' | null {
    const value = this.get<string>('theme');
    return value === 'light' || value === 'dark' ? value : null;
  }
}
