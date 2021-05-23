import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomeAccesComponent } from './diplome-acces/diplome-acces.component';
import { DocumentJustification2Component } from './document-justification2/document-justification2.component';
import { HomeComponent } from './home/home.component';
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
  path: 'home',
  component: HomeComponent
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
  path: 'diplomeAcces/:id',
  component: DiplomeAccesComponent
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
