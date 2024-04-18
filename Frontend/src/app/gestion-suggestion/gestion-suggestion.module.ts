import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionsuggestionRoutingModule } from './gestion-suggestion-routing.module';
import { DashsuggestionComponent } from './dashsuggestion/dashsuggestion.component';


@NgModule({
  declarations: [
    DashsuggestionComponent
  ],
  imports: [
    CommonModule,
    GestionsuggestionRoutingModule
  ]
})
export class GestionsuggestionModule {
  
 }
