import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './modules/home/home.component'
import { PatientComponent } from './modules/patient/patient.component'
import { LoginComponent } from './modules/patient/components/login/login.component'
import { SignUpComponent } from './modules/patient/components/sign-up/sign-up.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Patient',   redirectTo: 'Patient/Login', pathMatch: 'full' },
  { 
    path: 'Patient',
    component: PatientComponent,
    children:
    [
      {path: 'Login', component: LoginComponent },
      {path: 'SignUp', component: SignUpComponent }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
