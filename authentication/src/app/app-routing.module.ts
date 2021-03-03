import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './vistas/info/info.component';
import { LoginComponent } from './vistas/login/login.component';
import { RegisterComponent } from './vistas/register/register.component';
import { SendEmailComponent } from './vistas/send-email/send-email.component';


const routes: Routes = [

  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'info', component: InfoComponent
  },
  {
    path: 'sendemail', component: SendEmailComponent
  },

  { path: 'forgot-password', loadChildren: () => import('./vistas/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
