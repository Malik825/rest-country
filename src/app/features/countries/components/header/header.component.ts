import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitcherComponent } from '../../../theme/components/theme-switcher.component';
import { toggleTheme } from '../../../theme/store/theme.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeSwitcherComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
    constructor() {}
    toggleTheme(): void {
        
    }

}
