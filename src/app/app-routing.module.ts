import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
},
{
  path: 'navbar',
  component: NavbarComponent
},
{ path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
