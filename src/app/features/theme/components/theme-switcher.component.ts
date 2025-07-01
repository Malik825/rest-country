import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ThemeService } from '../../countries/services/theme-service.service';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent {
  theme$: Observable<string>;

  constructor(private themeService: ThemeService) {
    this.theme$ = this.themeService.getCurrentTheme();
    this.theme$.subscribe(theme => {
      console.log(`[ThemeSwitcherComponent] Current theme: ${theme}`);
    });
  }

  toggleTheme(): void {
    console.log('[ThemeSwitcherComponent] Toggling theme');
    this.themeService.toggleTheme();
  }
}