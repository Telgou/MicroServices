import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionevaluationRoutingModule } from './gestion-evaluation-routing.module';
import { dashevaluationComponent } from './dashevaluation/dashevaluation.component';


@NgModule({
  declarations: [
    dashevaluationComponent
  ],
  imports: [
    CommonModule,
    GestionevaluationRoutingModule
  ]
})
export class GestionevaluationModule { }
