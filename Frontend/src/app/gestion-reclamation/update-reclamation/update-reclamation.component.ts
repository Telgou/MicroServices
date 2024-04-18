import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { reclamations } from 'src/app/model/reclamation';
import { reclamationService } from 'src/app/services/reclamation.service';

@Component({
  selector: 'app-update-reclamation',
  templateUrl: './update-reclamation.component.html',
  styleUrls: ['./update-reclamation.component.scss']
})
export class UpdatereclamationComponent implements OnInit {
  Formupdate!: FormGroup;
  idReclamation!: any;
  idEmployee!: any;

  constructor(
    private fb: FormBuilder,
    private sReclamation: reclamationService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.idReclamation = this.ac.snapshot.params['idReclamation'];

    this.Formupdate = this.fb.group({
      idReclamation: [this.idReclamation],
      dateReclamation: [new Date()],
      statutReclamation: [''],
      descreptionReclamation: [''],
      idEmployee: [this.idEmployee]
    });
  }

  ngOnInit(): void {
    this.sReclamation.reclamationById(this.idReclamation).subscribe(data => {
      this.Formupdate.patchValue(data || new reclamations());
    });
  }

  updateReclamation() {
    
    const updateData = this.Formupdate.value;console.log(updateData)
    const updateSubscription = this.sReclamation.updateReclamation(updateData, this.idReclamation).subscribe({
      next: (data: any) => {
        console.log('reclamation updated successfully:', data);
        alert('reclamation updated successfully');
        this.router.navigate(['gestion-reclamation/allrec']);
      },
      error: (error: any) => {
        console.error('Error updating reclamation:', error);
        alert(`Error updating reclamation: ${error.message}`);
      },
      complete: () => {
        updateSubscription.unsubscribe();
      }
    });
  }
}
