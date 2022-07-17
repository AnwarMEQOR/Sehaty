import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './../../app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PatientComponent } from './patient.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';



@NgModule({
  declarations: [
    PatientComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
  ]
})
export class PatientModule { }
