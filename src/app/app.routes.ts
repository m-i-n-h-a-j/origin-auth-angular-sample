import { Routes } from '@angular/router';
import { CallbackComponent } from './components/callback-component/callback-component';
import { HomePage } from './pages/home-page/home-page';
import { authGuard } from './auth/gaurds/auth-guard';

export const routes: Routes = [
  {
    path: 'auth/callback',
    component: CallbackComponent,
  },
  {
    path: 'home',
        canActivate: [authGuard],

    component: HomePage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
