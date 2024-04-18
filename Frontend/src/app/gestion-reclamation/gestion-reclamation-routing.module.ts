import { ShowreclamationComponent } from './show-reclamation/show-reclamation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletereclamationComponent } from './delete-reclamation/delete-reclamation.component';
import { AddreclamationComponent } from './add-reclamation/add-reclamation.component';
import { UpdatereclamationComponent } from './update-reclamation/update-reclamation.component';
import { DetailreclamationComponent } from './detail-reclamation/detail-reclamation.component';
import { DashreclamationComponent } from './dashreclamation/dashreclamation.component';

const routes: Routes = [
  {
    path: '',
    component: DashreclamationComponent,
    children: [
      { path: 'addrec', component: AddreclamationComponent },
      { path: 'allrec', component: ShowreclamationComponent },
      {
        path: 'detailrec/:idReclamation',
        component: DetailreclamationComponent,
      },
      {
        path: 'updaterec/:idReclamation',
        component: UpdatereclamationComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionreclamationRoutingModule {

}
