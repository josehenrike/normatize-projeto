import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./public/public.module').then(m => m.PublicModule)
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/pages/login/login.component').then(c => c.LoginComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./auth/pages/register/register.component').then(c => c.RegisterComponent)
  },
  {
    path: 'signup',
    redirectTo: 'register'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
