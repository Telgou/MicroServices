import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionreclamationRoutingModule } from './gestion-reclamation-routing.module';
import { DashreclamationComponent } from './dashreclamation/dashreclamation.component';


@NgModule({
  declarations: [
    DashreclamationComponent
  ],
  imports: [
    CommonModule,
    GestionreclamationRoutingModule
  ]
})
export class GestionreclamationModule { }
