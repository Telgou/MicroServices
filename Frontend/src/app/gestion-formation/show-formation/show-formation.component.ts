// show-formation.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-show-formation',
  templateUrl: './show-formation.component.html',
  styleUrls: ['./show-formation.component.scss']
})
export class ShowFormationComponent implements OnInit {
  formations: Formation[] = [];
  filteredFormations: Formation[] = [];
  searchTerm: string = '';

  constructor(private formationService: FormationService, private router: Router) { }

  ngOnInit() {
    this.loadFormations();
  }

  loadFormations() {
    this.formationService.getAllFormations().subscribe(
      (formations: Formation[]) => {
        this.formations = formations;
        this.applyFilter(); // Apply filter on initial data load
      },
      (error) => {
        console.error('Erreur lors du chargement des formations:', error);
      }
    );
  }

  editFormation(formation: Formation) {
    if (formation && formation.idFormation) {
      console.log(formation.idFormation);
      this.router.navigate(['/gestion-formation/update-formation', formation.idFormation]);
    } else {
      console.error('Invalid formation data:', formation);
    }
  }

  deleteFormation(formation: Formation) {
    this.formationService.deleteFormation(formation.idFormation).subscribe(
      () => {
        console.log('Formation supprimée avec succès.');
        this.loadFormations(); // Reload the list after deletion
      },
      (error) => {
        console.error('Erreur lors de la suppression de la formation:', error);
      }
    );
  }

  applyFilter() {
    console.log('Search Term:', this.searchTerm);
    this.filteredFormations = this.formations.filter(
      (formation) =>
        formation.titre.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

}
