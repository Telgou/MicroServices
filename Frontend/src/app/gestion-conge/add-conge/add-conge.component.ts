import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Conge } from 'src/app/model/Conge';
import { CongeService } from 'src/app/services/conge.service';

@Component({
  selector: 'app-add-conge',
  templateUrl: './add-conge.component.html',
  styleUrls: ['./add-conge.component.scss']
})
export class AddCongeComponent {
  newCongeForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private congeService: CongeService, private router: Router) {
    this.newCongeForm = this.formBuilder.group({
      datedebut: [new Date(), Validators.required],
      datefini: [new Date(), Validators.required],
      type: ['', Validators.required],
      score: [0, Validators.required],
      statut: [false, Validators.required],
    });
  }

  addConge() {
    if (this.newCongeForm.valid) {
      const newConge: Conge = this.newCongeForm.value;

      this.congeService.addConge(newConge).subscribe(
        (conge: Conge) => {
          console.log('Congé ajouté avec succès:', conge);
          alert('Congé ajouté avec succès:');
          this.router.navigate(['gestion-conge/show-conge']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout du congé:', error);
          // Gérer l'erreur ici
        }
      );
    } else {
      alert("tous les champs doit etre rempli")
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
