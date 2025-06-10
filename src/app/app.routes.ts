import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'table',
    pathMatch: 'full',
  },
  {
    path: 'form',
    loadComponent: () =>
      import('./features/components/tree-form.component').then(m => m.TreeFormComponent),
  },
  {
    path: 'table',
    loadComponent: () =>
      import('./features/components/tree-table.component').then(m => m.TreeTableComponent),
  },
];
