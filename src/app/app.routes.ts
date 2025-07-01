import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/countries/pages/country-list.component').then(
        (m) => m.CountryListPage
      ),
  },
  {
    path: 'details/:code', // ✅ Fixed!
    loadComponent: () =>
      import('./features/countries/pages/country-details.component').then(
        (m) => m.CountryDetailsPage
      ),
  },
];
