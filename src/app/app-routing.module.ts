import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentJustification2Component } from './document-justification2/document-justification2.component';
import { InscriptionGlobalComponent } from './inscription-global/inscription-global.component';
import { InscriptionProfilComponent } from './inscription-profil/inscription-profil.component';
import { LoginComponent } from './login/login/login.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { RegisterComponent } from './register/register/register.component';

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
},

{
  path: 'global/:id',
  component: InscriptionGlobalComponent
},
{
  path: 'profil',
  component: InscriptionProfilComponent
},
{
  path: 'justification2',
  component: DocumentJustification2Component
},
{
  path: 'profil/:id',
  component: InscriptionProfilComponent
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
