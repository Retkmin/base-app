
import { NgModule } from '@angular/core';
import { LoginComponent } from './core/components/login/login.component';
import { MainComponent } from './core/components/main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RouterModule, Routes } from '@angular/router';

/**
 * Rutas securizadas
 */
const secureRoutes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./features/pages/home/home.module').then(mod => mod.HomeModule), data: { preload: true } 
  },
  /**
   * Consulta de usuarios
   */
  { 
    path: 'users',
    loadChildren: () => import('./features/components/user/user.module').then(mod => mod.UserModule), data: { preload: true } 
  },
];

const routes: Routes = [
/**
 * Login
 */
 {
    path: 'login',
    component: LoginComponent
  },

  /**
   * Ruta main securizada.
   */
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard],
    children: secureRoutes
  },

  // otherwhise redirect to main
  {
      path: '**',
      redirectTo: 'main/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
