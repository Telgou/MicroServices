import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { TransparentNavbarComponent } from './transparent-navbar/transparent-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRestaurantComponent } from './gestion-restaurant/home-restaurant/home-restaurant.component';
import { ShowRestaurantComponent } from './gestion-restaurant/show-restaurant/show-restaurant.component';
import { AddRestaurantComponent } from './gestion-restaurant/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './gestion-restaurant/update-restaurant/update-restaurant.component';
import { ShowTableComponent } from './gestion-tables/show-table/show-table.component';
import { AddTableComponent } from './gestion-tables/add-table/add-table.component';
import { DeleteTableComponent } from './gestion-tables/delete-table/delete-table.component';
import { UpdateTableComponent } from './gestion-tables/update-table/update-table.component';
import { AddServiceComponent } from './gestion-services/add-service/add-service.component';
import { DeleteServiceComponent } from './gestion-services/delete-service/delete-service.component';
import { ShowServiceComponent } from './gestion-services/show-service/show-service.component';
import { UpdateServiceComponent } from './gestion-services/update-service/update-service.component';
import { SuccessPageComponent } from './success-page/success-page.component';

import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { DeleteChambreComponent } from './gestion-chambre/delete-chambre/delete-chambre.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { AddEtatComponent } from './gestion-etat/add-etat/add-etat.component';
import { UpdateEtatComponent } from './gestion-etat/update-etat/update-etat.component';
import { ShowEtatComponent } from './gestion-etat/show-etat/show-etat.component';
import { RouterModule } from '@angular/router';
import { DetailEtatComponent } from './gestion-etat/detail-etat/detail-etat.component';
import { AddSejourComponent } from './gestion-Sejour/add-sejour/add-sejour.component';
import { ShowSejourComponent } from './gestion-Sejour/show-sejour/show-sejour.component';
import { DetailSejourComponent } from './gestion-Sejour/detail-sejour/detail-sejour.component';
import { ModifierSejourComponent } from './gestion-Sejour/modifier-sejour/modifier-sejour.component';

import { AddreclamationComponent  } from './gestion-reclamation/add-reclamation/add-reclamation.component';
import { ShowreclamationComponent } from './gestion-reclamation/show-reclamation/show-reclamation.component';
import { DetailreclamationComponent } from './gestion-reclamation/detail-reclamation/detail-reclamation.component';
import { UpdatereclamationComponent } from './gestion-reclamation/update-reclamation/update-reclamation.component';
import { DeletereclamationComponent } from './gestion-reclamation/delete-reclamation/delete-reclamation.component';
import { AddsuggestionComponent } from './gestion-suggestion/add-suggestion/add-suggestion.component';
import { ShowsuggestionComponent } from './gestion-suggestion/show-suggestion/show-suggestion.component';
import { DetailsuggestionComponent } from './gestion-suggestion/detail-suggestion/detail-suggestion.component';
import { UpdatesuggestionComponent } from './gestion-suggestion/update-suggestion/update-suggestion.component';
import { DeletesuggestionComponent } from './gestion-suggestion/delete-suggestion/delete-suggestion.component';
import { AddevaluationComponent } from './gestion-evaluation/add-evaluation/add-evaluation.component';
import { ShowevaluationComponent } from './gestion-evaluation/show-evaluation/show-evaluation.component';
import { UpdateevaluationComponent } from './gestion-evaluation/update-evaluation/update-evaluation.component';
import { DeleteevaluationComponent } from './gestion-evaluation/delete-evaluation/delete-evaluation.component';
import { DetailevaluationComponent } from './gestion-evaluation/detail-evaluation/detail-evaluation.component';
import { reclamationService } from './services/reclamation.service';

import { ShowfactureComponent } from './gestion-facture/showfacture/showfacture.component';
import { AddfactureComponent } from './gestion-facture/addfacture/addfacture.component';
import { CommonModule } from '@angular/common';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { ShowTarifComponent } from './gestion-tarif/showtarif/showtarif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateFactureComponent } from './gestion-facture/updatefacture/updatefacture.component';
import { DetailfactureComponent } from './gestion-facture/detailfacture/detailfacture.component';
import { AppRoutingModule } from './app-routing.module';
import { AddCongeComponent } from './gestion-conge/add-conge/add-conge.component';
import { ShowCongeComponent } from './gestion-conge/show-conge/show-conge.component';
import { UpdateCongeComponent } from './gestion-conge/update-conge/update-conge.component';
import { AddEmployeComponent } from './gestion-employe/add-employe/add-employe.component';
import { UpdateEmployeComponent } from './gestion-employe/update-employe/update-employe.component';
import { ShowEmployeComponent } from './gestion-employe/show-employe/show-employe.component';
import { ShowFormationComponent } from './gestion-formation/show-formation/show-formation.component';
import { AddFormationComponent } from './gestion-formation/add-formation/add-formation.component';
import { UpdateFormationComponent } from './gestion-formation/update-formation/update-formation.component';

@NgModule({
  declarations: [
    AppComponent,

    AddreclamationComponent ,
    ShowreclamationComponent,
    DetailreclamationComponent,
    UpdatereclamationComponent,
    DeletereclamationComponent,
    AddevaluationComponent,
    ShowevaluationComponent,
    UpdateevaluationComponent,
    DeleteevaluationComponent,
    DetailevaluationComponent,
    AddsuggestionComponent,
    ShowsuggestionComponent,
    DetailsuggestionComponent,
    UpdatesuggestionComponent,
    DeletesuggestionComponent,
    RegisterComponent,
    TransparentNavbarComponent,
    HomePageComponent,
    FooterComponent,
    HomeRestaurantComponent,
    ShowRestaurantComponent,
    AddRestaurantComponent,
    UpdateRestaurantComponent,
    ShowTableComponent,
    AddTableComponent,
    DeleteTableComponent,
    UpdateTableComponent,
    AddServiceComponent,
    DeleteServiceComponent,
    ShowServiceComponent,
    UpdateServiceComponent,
    SuccessPageComponent,
    AddChambreComponent,
    ShowChambreComponent,
    UpdateChambreComponent,
    DeleteChambreComponent,
    DetailChambreComponent,
    AddEtatComponent,
    UpdateEtatComponent,
    ShowEtatComponent,
    DetailEtatComponent,
    AddSejourComponent,
    ShowSejourComponent,
    DetailSejourComponent,
    ModifierSejourComponent,
    ShowfactureComponent,
    AddfactureComponent,
    DetailReservationComponent,
    ShowTarifComponent,
    UpdateFactureComponent,
    DetailfactureComponent,
    AddCongeComponent,
    ShowCongeComponent,
    UpdateCongeComponent,
    AddEmployeComponent,
    UpdateEmployeComponent,
    ShowEmployeComponent,
    ShowFormationComponent,
    AddFormationComponent,
    UpdateFormationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSnackBarModule,MatDialogModule

  ],
  providers: [Location,reclamationService],

  bootstrap: [AppComponent]
})
export class AppModule { }
