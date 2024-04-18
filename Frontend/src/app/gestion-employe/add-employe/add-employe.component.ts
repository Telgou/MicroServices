import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss']
})
export class AddEmployeComponent {
  addEmployeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private employeService: EmployeService,
    private router: Router
  ) {
    this.addEmployeForm = this.formBuilder.group({
      nomEmp: ['', Validators.required],
      prenomEmp: ['', Validators.required],
      telEmp: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Allows only numeric values
      posteEmp: ['', Validators.required],
    });
  }

  addEmploye() {
    if (this.addEmployeForm.valid) {
      const newEmployeData = this.addEmployeForm.value;

      this.employeService.addEmploye(newEmployeData).subscribe(
        (employe) => {
          console.log('Employé ajouté avec succès:', employe);
          alert('Employé ajouté avec succès:');
          this.router.navigate(['gestion-employe/show-employe']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'employé:', error);
          // Handle the error here
        }
      );
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }
}
