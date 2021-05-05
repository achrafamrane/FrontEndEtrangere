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
import{InscriptionProfilComponent} from './inscription-profil/inscription-profil.component'
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavbarComponent,InscriptionProfilComponent,
    LoginComponent,InscriptionGlobalComponent,
    SidebarComponent,
    HeaderComponent,ConfirmEqualValidatorDirective,
  ],
  imports: [
    FormsModule,MatSliderModule,MatStepperModule,
    HttpClientModule,
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}],
  bootstrap: [AppComponent]
})
export class AppModule { }
