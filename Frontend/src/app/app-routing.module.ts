import { GestionReservationModule } from './gestion-reservation/gestion-reservation.module';
import { ShowfactureComponent } from './gestion-facture/showfacture/showfacture.component';
import { AddfactureComponent } from './gestion-facture/addfacture/addfacture.component';
import { DetailReservationComponent } from './gestion-reservation/detail-reservation/detail-reservation.component';
import { ShowTarifComponent } from './gestion-tarif/showtarif/showtarif.component';
import { UpdateFactureComponent } from './gestion-facture/updatefacture/updatefacture.component';
import { UpdateevaluationComponent } from './gestion-evaluation/update-evaluation/update-evaluation.component';
import { UpdatereclamationComponent } from './gestion-reclamation/update-reclamation/update-reclamation.component';
import { UpdatesuggestionComponent } from './gestion-suggestion/update-suggestion/update-suggestion.component';
import { DetailreclamationComponent } from './gestion-reclamation/detail-reclamation/detail-reclamation.component';
import { DetailsuggestionComponent } from './gestion-suggestion/detail-suggestion/detail-suggestion.component';
import { DetailevaluationComponent } from './gestion-evaluation/detail-evaluation/detail-evaluation.component';
import { ShowsuggestionComponent } from './gestion-suggestion/show-suggestion/show-suggestion.component';
import { ShowreclamationComponent } from './gestion-reclamation/show-reclamation/show-reclamation.component';
import { ShowevaluationComponent } from './gestion-evaluation/show-evaluation/show-evaluation.component';

import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TransparentNavbarComponent } from './transparent-navbar/transparent-navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RegisterComponent } from './register/register.component';
import { HomeRestaurantComponent } from './gestion-restaurant/home-restaurant/home-restaurant.component';
import { ShowRestaurantComponent } from './gestion-restaurant/show-restaurant/show-restaurant.component';
import { AddRestaurantComponent } from './gestion-restaurant/add-restaurant/add-restaurant.component';
import { UpdateRestaurantComponent } from './gestion-restaurant/update-restaurant/update-restaurant.component';
import { UpdateTableComponent } from './gestion-tables/update-table/update-table.component';
import { ShowTableComponent } from './gestion-tables/show-table/show-table.component';
import { AddTableComponent } from './gestion-tables/add-table/add-table.component';
import { AddServiceComponent } from './gestion-services/add-service/add-service.component';
import { ShowServiceComponent } from './gestion-services/show-service/show-service.component';
import { UpdateServiceComponent } from './gestion-services/update-service/update-service.component';
import { SuccessPageComponent } from './success-page/success-page.component';
import { DetailChambreComponent } from './gestion-chambre/detail-chambre/detail-chambre.component';
import { AddEtatComponent } from './gestion-etat/add-etat/add-etat.component';
import { ShowEtatComponent } from './gestion-etat/show-etat/show-etat.component';
import { UpdateEtatComponent } from './gestion-etat/update-etat/update-etat.component';
import { DetailEtatComponent } from './gestion-etat/detail-etat/detail-etat.component';
import { ShowSejourComponent } from './gestion-Sejour/show-sejour/show-sejour.component';
import { DetailSejourComponent } from './gestion-Sejour/detail-sejour/detail-sejour.component';
import { ModifierSejourComponent } from './gestion-Sejour/modifier-sejour/modifier-sejour.component';
import { ShowChambreComponent } from './gestion-chambre/show-chambre/show-chambre.component';
import { UpdateChambreComponent } from './gestion-chambre/update-chambre/update-chambre.component';
import { AddChambreComponent } from './gestion-chambre/add-chambre/add-chambre.component';
import { AddSejourComponent } from './gestion-Sejour/add-sejour/add-sejour.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddCongeComponent } from './gestion-conge/add-conge/add-conge.component';
import { ShowCongeComponent } from './gestion-conge/show-conge/show-conge.component';
import { UpdateCongeComponent } from './gestion-conge/update-conge/update-conge.component';
import { AddEmployeComponent } from './gestion-employe/add-employe/add-employe.component';
import { ShowEmployeComponent } from './gestion-employe/show-employe/show-employe.component';
import { UpdateEmployeComponent } from './gestion-employe/update-employe/update-employe.component';
import { AddFormationComponent } from './gestion-formation/add-formation/add-formation.component';
import { ShowFormationComponent } from './gestion-formation/show-formation/show-formation.component';
import { UpdateFormationComponent } from './gestion-formation/update-formation/update-formation.component';


const routes: Routes = [

  { path: '', component : HomePageComponent},
  {path: 'gestion-reservation', loadChildren: () => import('./gestion-reservation/gestion-reservation.module').then(m => m.GestionReservationModule)},
  { path: 'showfacture', component: ShowfactureComponent }, // Add this route for the ShowfactureComponent
  { path: 'add-facture/:idreservation', component: AddfactureComponent },
  { path: 'showtarif', component: ShowTarifComponent },
  { path: 'updateFacture/:factureId', component: UpdateFactureComponent },


  { path: 'gestion-chambre/detail-chambre/:idChambre', component: DetailChambreComponent },
  {path:'gestion-chambre/show-chambre',component:ShowChambreComponent},
  { path:'gestion-chambre/update-chambre/:idChambre',component:UpdateChambreComponent},
  { path:'gestion-chambre/add-chambre',component:AddChambreComponent},
  { path: 'gestion-etat/add-etat', component: AddEtatComponent },
  {path:'gestion-sejour/add-sejour',component:AddSejourComponent},
  { path: 'gestion-etat/show-etat', component: ShowEtatComponent },
  { path: 'gestion-etat/update-etat/:id', component: UpdateEtatComponent },
  { path: 'gestion-etat/detail-etat/:idEtat', component: DetailEtatComponent },
  { path: 'gestion-sejour/show-sejour', component: ShowSejourComponent },
  { path: 'gestion-sejour/detail-sejour/:idSejour', component: DetailSejourComponent },
  { path: 'gestion-sejour/modifier-sejour/:idSejour',component:ModifierSejourComponent},
  { path: 'registry', component: RegisterComponent },
  { path: 'home-restaurant', component: HomeRestaurantComponent },
  { path: 'show-restaurant', component: ShowRestaurantComponent },
  { path: 'gestion-restaurant/addRestaurant', component: AddRestaurantComponent },
  { path: 'gestion-restaurant/updateRestaurant/:restaurantId', component: UpdateRestaurantComponent },
  { path: 'gestion-tables/UpdateTable/:tableId', component: UpdateTableComponent },
  { path: 'show-table', component: ShowTableComponent },
  { path: 'add-table', component: AddTableComponent},
  { path: 'home-page', component : HomePageComponent},
  { path: 'nav-bar', component : TransparentNavbarComponent},
  { path: 'add-service', component : AddServiceComponent},
  { path: 'show-service', component : ShowServiceComponent},
  { path: 'gestion-services/UpdateService/:serviceId', component : UpdateServiceComponent},
  { path: 'success-page', component: SuccessPageComponent },
  {path: 'gestion-reclamation', loadChildren: () => import('./gestion-reclamation/gestion-reclamation.module').then(m => m.GestionreclamationModule)},

{path: 'gestion-suggestion', loadChildren: () => import('./gestion-suggestion/gestion-suggestion.module').then(m => m.GestionsuggestionModule)},
{path: 'gestion-evaluation', loadChildren: () => import('./gestion-evaluation/gestion-evaluation.module').then(m => m.GestionevaluationModule)},
{ path: 'update-evaluation/:idEvaluation', component: UpdateevaluationComponent },
{ path: 'update-reclamation/:idReclamation', component: UpdatereclamationComponent},
{ path: 'update-suggestion/:idSuggestion', component: UpdatesuggestionComponent},
{ path: 'detail-reclamation/:idReclamation', component: DetailreclamationComponent },
{ path: 'detail-suggestion/:idSuggestion', component: DetailsuggestionComponent },
{path: 'gestion-suggestion/allsug',component:ShowsuggestionComponent},
{path: 'gestion-evaluation/allev',component:ShowevaluationComponent},
{path: 'gestion-reclamation/allrec',component:ShowreclamationComponent},
{ path: 'detail-evaluation/:idEvaluation', component: DetailevaluationComponent },


//ahmed
{path:'gestion-conge/add-conge',component:AddCongeComponent},
{path:'gestion-conge/show-conge',component:ShowCongeComponent},
{path:'gestion-conge/update-conge/:id',component:UpdateCongeComponent},
{path:'gestion-employe/add-employe',component:AddEmployeComponent},
{path:'gestion-employe/update-employe/:id',component:UpdateEmployeComponent},
{path:'gestion-employe/show-employe',component:ShowEmployeComponent},

{path:'gestion-formation/add-formation',component:AddFormationComponent},
{path:'gestion-formation/show-formation',component:ShowFormationComponent},
{path:'gestion-formation/update-formation/:id',component:UpdateFormationComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatSnackBarModule,FormsModule,GestionReservationModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
