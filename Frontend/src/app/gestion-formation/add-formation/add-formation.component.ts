// add-formation.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss']
})
export class AddFormationComponent implements OnInit {
  addFormationForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formationService: FormationService,
    private router: Router
  ) {
    this.addFormationForm = this.formBuilder.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      formateur: ['', Validators.required],
      participant: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Additional initialization logic if needed
  }

  addFormation() {
    if (this.addFormationForm.valid) {
      const newFormation: Formation = this.addFormationForm.value;

      this.formationService.addFormation(newFormation).subscribe(
        (formation: Formation) => {
          console.log('Formation ajoutée avec succès:', formation);
          alert('Formation ajoutée avec succès:');
          this.router.navigate(['/gestion-formation/show-formation']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de la formation:', error);
          // Handle the error here
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
