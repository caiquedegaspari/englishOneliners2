import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'landing-page', loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule)},
  { path:'', redirectTo:'/landing-page',pathMatch:'full'},
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
  { path: 'user-page', loadChildren: () => import('./components/user-page/user-page.module').then(m => m.UserPageModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
