import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evaluation } from 'src/app/model/evaluation';
import { evaluationService } from 'src/app/services/evaluation.service';

@Component({
  selector: 'app-update-evaluation',
  templateUrl: './update-evaluation.component.html',
  styleUrls: ['./update-evaluation.component.scss']
})
export class UpdateevaluationComponent implements OnInit {
  Formupdate!: FormGroup;
  idEvaluation!: any;

  constructor(
    private fb: FormBuilder,
    private sEvaluation: evaluationService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.idEvaluation = this.ac.snapshot.params['idEvaluation'];

    this.Formupdate = this.fb.group({
      idEvaluation: [this.idEvaluation],
      dateEvaluation: [new Date()],
      evaluateur: [''],
      objectifEvaluation: ['']
    });
  }

  ngOnInit(): void {
    this.sEvaluation.evaluationById(this.idEvaluation).subscribe(data => {
      this.Formupdate.patchValue(data || new evaluation());
    });
  }

  updateEvaluation() {
    
    const updateData = this.Formupdate.value;console.log(updateData)
    const updateSubscription = this.sEvaluation.updateEvaluation(updateData, this.idEvaluation).subscribe({
      next: (data: any) => {
        console.log('evaluation updated successfully:', data);
        alert('evaluation updated successfully');
        this.router.navigate(['gestion-evaluation/allev']);
      },
      error: (error: any) => {
        console.error('Error updating evaluation:', error);
        alert(`Error updating evaluation: ${error.message}`);
      },
      complete: () => {
        updateSubscription.unsubscribe();
      }
    });
  }
}
