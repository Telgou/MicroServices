import { ShowevaluationComponent } from './show-evaluation/show-evaluation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteevaluationComponent } from './delete-evaluation/delete-evaluation.component';
import { AddevaluationComponent } from './add-evaluation/add-evaluation.component';
import { UpdateevaluationComponent } from './update-evaluation/update-evaluation.component';
import { DetailevaluationComponent } from './detail-evaluation/detail-evaluation.component';
import { dashevaluationComponent } from './dashevaluation/dashevaluation.component';

const routes: Routes = [
  {
    path: '',
    component: dashevaluationComponent,
    children: [
      { path: 'addev', component: AddevaluationComponent },
      { path: 'allev', component: ShowevaluationComponent },
      {
        path: 'detailev/:idEvaluation',
        component: DetailevaluationComponent,
      },
      {
        path: 'updateev/:idEvaluation',
        component: UpdateevaluationComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionevaluationRoutingModule {

}
