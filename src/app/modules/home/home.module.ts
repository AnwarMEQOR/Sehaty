import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './../../app-routing.module';

import { SharedModule } from '../shared/shared.module'

import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    AppRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }
