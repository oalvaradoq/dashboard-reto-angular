import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/organizations/organization-page.component').then(
        (m) => m.OrganizationPageComponent
      ),
  },
];
