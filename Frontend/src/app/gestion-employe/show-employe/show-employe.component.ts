import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employe } from 'src/app/model/employe';
import { EmployeService } from 'src/app/services/employe.service';

@Component({
  selector: 'app-show-employe',
  templateUrl: './show-employe.component.html',
  styleUrls: ['./show-employe.component.scss']
})
export class ShowEmployeComponent implements OnInit {
  employes: Employe[] = [];
  filteredEmployes: Employe[] = [];
  searchTerm: string = '';

  constructor(private employeService: EmployeService, private router: Router) {}

  ngOnInit() {
    this.loadEmployes();
  }

  loadEmployes() {
    this.employeService.getAllEmployes().subscribe(
      (employes: Employe[]) => {
        this.employes = employes;
        this.applyFilter(); // Apply filter initially to show all employes
      },
      (error) => {
        console.error('Erreur lors du chargement des employés:', error);
        // Handle the error here
      }
    );
  }

  editemp(employe: Employe) {
    if (employe && employe.idEmp) {
      console.log(employe.idEmp);
      this.router.navigate(['/gestion-employe/update-employe', employe.idEmp]);
    } else {
      console.error('Invalid employee data:', employe);
    }
  }

  deleteemp(employe: Employe) {
    // Implement the code to delete the employe
    this.employeService.deleteEmploye(employe.idEmp).subscribe(
      () => {
        console.log('Employé supprimé avec succès.');
        this.loadEmployes(); // Reload the list after deletion
      },
      (error) => {
        console.error('Erreur lors de la suppression de l\'employé:', error);
        // Handle the error here
      }
    );
  }

  applyFilter() {
    this.filteredEmployes = this.employes.filter(
      (employe) =>
        employe.nomEmp.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
