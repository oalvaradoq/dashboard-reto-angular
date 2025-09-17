import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'organizations',
    loadComponent: () =>
      import('./pages/organizations/organization-page.component').then(
        (m) => m.OrganizationPageComponent
      ),

    children: [
      {
        path: '',
        redirectTo: 'divisions',
        pathMatch: 'full',
      },
      {
        path: 'divisions',
        loadComponent: () =>
          import('./pages/organizations/divisions/divisions.component').then(
            (m) => m.DivisionsComponent
          ),
      },
      {
        path: 'collaborators',
        loadComponent: () =>
          import('./pages/organizations/collaborators/collaborators.component').then(
            (m) => m.CollaboratorsComponent
          ),
      },
    ],
  },
];
