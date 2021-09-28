import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{ 
    path: 'users', 
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
