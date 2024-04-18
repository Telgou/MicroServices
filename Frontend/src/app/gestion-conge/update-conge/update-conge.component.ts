import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Conge } from 'src/app/model/Conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-update-conge',
  templateUrl: './update-conge.component.html',
  styleUrls: ['./update-conge.component.scss']
})
export class UpdateCongeComponent implements OnInit {
  updateCongeForm: FormGroup;
  congeId!: number;
  conge!: Conge;

  constructor(
    private formBuilder: FormBuilder,
    private congeService: CongeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateCongeForm = this.formBuilder.group({
      idConge: [this.congeId, Validators.required],
      datedebut: ['', Validators.required],
      datefini: ['', Validators.required],
      type: ['', Validators.required],
      score: [0, Validators.required],
      statut: [false, Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.congeId = +params['id'];
      this.loadCongeDetails();
    });
  }

  loadCongeDetails() {
    this.congeService.getCongeById(this.congeId).subscribe(
      (conge: Conge) => {
        this.conge = conge;
        this.updateCongeForm.patchValue({
          idConge:conge.idConge,
          datedebut:  this.formatDateForInput(this.conge.datedebut),
          datefini: this.formatDateForInput(this.conge.datefini),
          type: conge.type,
          score: conge.score,
          statut: conge.statut,
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des détails du congé:', error);
        // Gérer l'erreur ici
      }
    );
  }

  updateConge() {
    if (this.updateCongeForm.valid) {
      const updatedCongeData: Conge = this.updateCongeForm.value;

      this.congeService.updateConge(updatedCongeData).subscribe(
        (conge: Conge) => {
          console.log('Congé mis à jour avec succès:', conge);
          alert('Congé mis à jour avec succès:');
          this.router.navigate(['gestion-conge/show-conge']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour du congé:', error);
          // Gérer l'erreur ici
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }

  private formatDateForInput(date: Date | string): string {
    if (typeof date === 'string') {
      return date;
    } else if (date instanceof Date) {
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    } else {
      return '';
    }
  }

}
