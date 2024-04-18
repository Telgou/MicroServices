import { Router } from '@angular/router';
// show-conge.component.ts
import { Component, OnInit } from '@angular/core';
import { Conge } from 'src/app/model/Conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-show-conge',
  templateUrl: './show-conge.component.html',
  styleUrls: ['./show-conge.component.scss']
})
export class ShowCongeComponent implements OnInit {
  conges: Conge[] = [];

  constructor(private congeService: CongeService, private router :Router) { }

  ngOnInit() {
    this.loadConges();
  }

  loadConges() {
    this.congeService.getAllConges().subscribe(
      (conges: Conge[]) => {
        this.conges = conges;
      },
      (error) => {
        console.error('Erreur lors du chargement des congés:', error);
        // Gérer l'erreur ici
      }
    );
  }

  showDetails(conge: Conge) {
    // Implémentez le code pour afficher les détails du congé
    console.log('Détails du congé:', conge);
  }

  editConge(conge: Conge) {
    this.router.navigate(['gestion-conge/update-conge/',conge.idConge])
    console.log('Édition du congé:', conge);
  }

  deleteConge(conge: Conge) {
    // Implémentez le code pour supprimer le congé
    this.congeService.deleteConge(conge.idConge).subscribe(
      () => {
        console.log('Congé supprimé avec succès.');
        this.loadConges(); // Rechargez la liste après la suppression
      },
      (error) => {
        console.error('Erreur lors de la suppression du congé:', error);
        // Gérer l'erreur ici
      }
    );
  }
}
