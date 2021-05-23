import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {APP_BASE_HREF} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { httpInterceptorProviders } from './auth/auth-interceptor';
import { RegisterComponent } from './register/register/register.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { LoginComponent } from './login/login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ConfirmEqualValidatorDirective } from './register/register/ConfirmEqualValidator.directive';
import {  InscriptionGlobalComponent} from './inscription-global/inscription-global.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{InscriptionProfilComponent} from './inscription-profil/inscription-profil.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DocumentJustification2Component } from './document-justification2/document-justification2.component';
import { OrderModule } from 'ngx-order-pipe';
import { DiplomeAccesComponent } from './diplome-acces/diplome-acces.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,InscriptionProfilComponent,
    LoginComponent,InscriptionGlobalComponent,
    SidebarComponent,
    HeaderComponent,ConfirmEqualValidatorDirective, DocumentJustification2Component, DiplomeAccesComponent, HomeComponent,
  ],
  imports: [
    MatFileUploadModule,MatFormFieldModule,MatToolbarModule,OrderModule,
    FormsModule,MatSliderModule,MatStepperModule,
    HttpClientModule,
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
