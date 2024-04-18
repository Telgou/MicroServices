import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { evaluationService } from 'src/app/services/evaluation.service';

import { Router } from '@angular/router';
import { evaluation } from 'src/app/model/evaluation';

@Component({
  selector: 'app-add-evaluation',
  templateUrl: './add-evaluation.component.html',
  styleUrls: ['./add-evaluation.component.scss'],
})
export class AddevaluationComponent {
  addev: FormGroup;
  evaluationService: any;
  evaluationToAdd: any;


  constructor(private fb: FormBuilder, private sevaluation: evaluationService , private router:Router) {
    this.addev = this.fb.group({
      idEvaluation: [''],
      dateEvaluation: ['', Validators.required],
      evaluateur: ['', Validators.required],
      objectifEvaluation: ['', Validators.required], // Initialisez à null
    });
  }

  onSubmit() {
    if (this.addev.valid) {
      const evaluation = this.addev.value;
      console.log(evaluation); // Vérifiez la valeur de estValid ici
      this.sevaluation.addEvaluation(evaluation).subscribe((data) => {
        console.log(data);
        alert('evaluation ajoutée avec succès');
        this.router.navigate(['gestion-evaluation/allev'])
      });
    }
  }

}
