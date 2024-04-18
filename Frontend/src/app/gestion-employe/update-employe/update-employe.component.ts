import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-update-employe',
  templateUrl: './update-employe.component.html',
  styleUrls: ['./update-employe.component.scss']
})
export class UpdateEmployeComponent implements OnInit {
  updateEmployeForm: FormGroup;
  employeId!: number;
  employe!: Employe;

  constructor(
    private formBuilder: FormBuilder,
    private employeService: EmployeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.updateEmployeForm = this.formBuilder.group({
  idEmp: [this.employeId], // Keep an empty string for idEmployee
      nomEmp: ['', Validators.required],
      prenomEmp: ['', Validators.required],
      telEmp: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      posteEmp: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.employeId = +params['id'];
      this.loadEmployeDetails();
    });
  }

  loadEmployeDetails() {
    this.employeService.getEmployeById(this.employeId).subscribe(
      (employe: Employe) => {
        this.employe = employe;
        this.updateEmployeForm.patchValue({
          idEmp: employe.idEmp, // Use idEmp instead of idEmployee if that's the correct property name
          nomEmp: employe.nomEmp,
          prenomEmp: employe.prenomEmp,
          telEmp: employe.telEmp,
          posteEmp: employe.posteEmp,
        });
        console.log(employe);
      },
      (error) => {
        console.error('Erreur lors du chargement des détails de l\'employé:', error);
        // Handle the error here
      }
    );
  }

  updateEmploye() {
    if (this.updateEmployeForm.valid) {
      const updatedEmployeData: Employe = this.updateEmployeForm.value;

      this.employeService.updateEmploye(updatedEmployeData).subscribe(
        (employe: Employe) => {
          console.log('Employé mis à jour avec succès:', employe);
          alert('Employé mis à jour avec succès:');
          this.router.navigate(['gestion-employe/show-employe']);
        },
        (error) => {
          console.error('Erreur lors de la mise à jour de l\'employé:', error);
          // Handle the error here
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
