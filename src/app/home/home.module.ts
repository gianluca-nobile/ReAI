import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Step1Component } from './step-1/step-1.component';
import { InputFileComponent } from './step-1/input-file/input-file.component';


@NgModule({
  declarations: [
    HomeComponent,
    Step1Component,
    InputFileComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
