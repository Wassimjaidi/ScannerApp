import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'scanner',
    loadComponent: () => import('./pages/scanner/scanner.page').then( m => m.ScannerPage)
  },
  {
    path: 'manual-entry',
    loadComponent: () => import('./pages/manual-entry/manual-entry.page').then( m => m.ManualEntryPage)
  },
];


