import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'modulos',
    loadComponent: () => import('./pages/modulos/modulos').then(m => m.Modulos)
  },
  {
    path: 'modulo/:id',
    loadComponent: () => import('./pages/modulo-detalhe/modulo-detalhe').then(m => m.ModuloDetalhe)
  },
  {
    path: 'aula/:id',
    loadComponent: () => import('./pages/aula/aula').then(m => m.Aula)
  },
  {
    path: 'glossario',
    loadComponent: () => import('./pages/glossario/glossario').then(m => m.Glossario)
  },
  {
    path: 'ferramentas',
    loadComponent: () => import('./pages/ferramentas/ferramentas').then(m => m.Ferramentas)
  },
  {
    path: 'entrevista',
    loadComponent: () => import('./pages/entrevista/entrevista').then(m => m.Entrevista)
  }
]