import { ShowsuggestionComponent } from './show-suggestion/show-suggestion.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletesuggestionComponent } from './delete-suggestion/delete-suggestion.component';
import { AddsuggestionComponent } from './add-suggestion/add-suggestion.component';
import { UpdatesuggestionComponent } from './update-suggestion/update-suggestion.component';
import { DetailsuggestionComponent } from './detail-suggestion/detail-suggestion.component';
import { DashsuggestionComponent } from './dashsuggestion/dashsuggestion.component';

const routes: Routes = [
  {
    path: '',
    component: DashsuggestionComponent,
    children: [
      { path: 'addsug', component: AddsuggestionComponent },
    //  { path: 'allsug', component: ShowsuggestionComponent },
      {
        path: 'detailsug/:idSuggestion',
        component: DetailsuggestionComponent,
      },
      {
        path: 'updatesug/:idSuggestion',
        component: UpdatesuggestionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionsuggestionRoutingModule {}
