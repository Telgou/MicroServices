import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { reclamations } from 'src/app/model/reclamation';
import { reclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-show-reclamation',
  templateUrl: './show-reclamation.component.html',
  styleUrls: ['./show-reclamation.component.scss'],
})
export class ShowreclamationComponent implements OnInit {
  reclamations: any[] = [];
  searchTerm: string = '';
  status: string | undefined;
  

  constructor(
    private sreclamation: reclamationService,
    private router: Router,
    private reclamationService: reclamationService
  ) {}

  ngOnInit(): void {
    this.sreclamation.getreclamation().subscribe((data: any) => {
      console.log(data);
      this.reclamations = data;
    });

    // Appel de la fonction pour récupérer le statut de la réclamation
    this.getReclamationStatus();
  }

  getReclamationStatus() {
    this.reclamationService.getReclamationStatus().subscribe(
      (response) => {
        this.status = response;
      },
      (error) => {
        console.error('Error fetching reclamation status:', error);
        console.log('Full response:', error);
        // Handle the error as needed
      }
    );
  }

  showDetails(idReclamation: any) {
    this.router.navigate(['/gestion-reclamation/detailrec', idReclamation]);
  }
  editre(idReclamation: any) {
    this.router.navigate(['/gestion-reclamation/updaterec', idReclamation]);

  }
  deletere(re: reclamations) {
    this.sreclamation.removeReclamation(re).subscribe((data) => {
      console.log(data);
      alert('reclamation supprimée avec succès');
      this.router.navigate(['/gestion-reclamation/allrec']);
      window.location.reload();
    });
  }
  addreclamation() {
    this.router.navigate(['/gestion-reclamation/addrec']); // Naviguer vers la page d'ajout
  }

  get filteredreclamation() {
    return this.reclamations.filter((reclamation) =>
    reclamation.idReclamation.toString().includes(this.searchTerm) );
  }


}
