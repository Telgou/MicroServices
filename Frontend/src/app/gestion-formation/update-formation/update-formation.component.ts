// update-formation.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/model/Formation';
import { FormationService } from 'src/app/services/formation.service'; // Update the path accordingly

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.scss']
})
export class UpdateFormationComponent implements OnInit {
  updateFormationForm: FormGroup;
  formationId!: number;
  formation!: Formation;

  constructor(
    private formBuilder: FormBuilder,
    private formationService: FormationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateFormationForm = this.formBuilder.group({
      idFormation:[this.formationId],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      formateur: ['', Validators.required],
      participant: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.formationId = +params['id'];
      this.loadFormationDetails();
    });
  }

  loadFormationDetails() {
    this.formationService.getFormationById(this.formationId).subscribe(
      (formation: Formation) => {
        this.formation = formation;
        this.updateFormationForm.patchValue({
          idFormation:formation.idFormation,
          titre: formation.titre,
          description: formation.description,
          formateur: formation.formateur,
          participant: formation.participant,
        });
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de la formation:', error);
        // Handle the error here
      }
    );
  }

  updateFormation() {
    if (this.updateFormationForm.valid) {
      const updatedFormationData: Formation = this.updateFormationForm.value;

      this.formationService.updateFormation(updatedFormationData).subscribe(
        (formation: Formation) => {
          console.log('Formation mise à jour avec succès:', formation);
          alert('Formation mise à jour avec succès.');
          this.router.navigate(['gestion-formation/show-formation']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de la formation:', error);
          // Handle the error here
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
