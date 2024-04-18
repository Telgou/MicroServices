import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Sejour } from 'src/app/model/Sejour';
import { Status } from 'src/app/model/Status';
import { SejourService } from 'src/app/services/sejour.service';
import { Chambre } from 'src/app/model/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-modifier-sejour',
  templateUrl: './modifier-sejour.component.html',
  styleUrls: ['./modifier-sejour.component.scss']
})
export class ModifierSejourComponent implements OnInit {
  historiqueSejour!: Sejour;
  idHistSejour: any;
  statusEnum = Object.values(Status);
  chambres!: Chambre[];
  updatedSejour!: FormGroup;
  chambreid!: number;

  constructor(
    private sSejour: SejourService,
    private sChambre: ChambreService,
    private fb: FormBuilder,
    private router: Router,
    private ac: ActivatedRoute
  ) {
    this.idHistSejour = this.ac.snapshot.params['idSejour'];

    if (!this.idHistSejour) {
      console.error('idHistSejour is undefined in the route parameters.');
      this.router.navigate(['/error']);
      return;
    }

    this.updatedSejour = this.fb.group({
      idHistSejour: [this.idHistSejour],
      dateArrivee: [''],
      dateDepart: [''],
      statutSejour: [''],
      cout: [''],
      chambre: ['']
    });
  }

  ngOnInit(): void {
    if (this.idHistSejour) {
      this.loadData();
      this.loadChambres();
    }
  }

  loadData() {
    this.sSejour.getHistoriqueSejourById(this.idHistSejour).subscribe({
      next: (data: Sejour) => {
        this.historiqueSejour = data;

        this.updatedSejour.patchValue({
          dateDepart: this.formatDateForInput(this.historiqueSejour?.dateDepart) || '',
          dateArrivee: this.formatDateForInput(this.historiqueSejour?.dateArrivee) || '',
          statutSejour: this.historiqueSejour?.statutSejour || '',
          cout: this.historiqueSejour?.cout || '',
          chambre: this.historiqueSejour?.chambre ? this.historiqueSejour.chambre.idChambre : ''
        });

        if (this.historiqueSejour?.chambre) {
          console.log('Numéro de chambre:', this.historiqueSejour.chambre.numChambre);
        } else {
          console.warn('La chambre est null.');
        }
      },
      error: (error) => {
        console.error('Error fetching sejour data:', error);
      }
    });
  }

  loadChambres() {
    this.sChambre.getAllChambre().subscribe((data: Chambre[]) => {
      this.chambres = data;
    });
  }

  update() {
    if (this.updatedSejour.valid) {
      const updatedSejourData = this.updatedSejour.value;
      const nouvelleChambreId: number | null = updatedSejourData.chambre;

      if (this.historiqueSejour) {
        console.log(nouvelleChambreId)
        if (nouvelleChambreId !== null) {
          forkJoin([
            this.sChambre.desaffecterHistoriqueSejourDeChambre(0),
            this.sChambre.affecterHistoriqueSejourAChambre(2, this.idHistSejour)
          ]).subscribe({
            next: () => {
              console.log('Opérations sur les chambres réussies');
              this.updateSejour(updatedSejourData);
            },
            error: (error) => {
              console.error('Erreur lors des opérations sur les chambres:', error);
              this.router.navigate(['gestion-sejour/show-sejour']);
            },
          });
        } else {
          console.error('Chambre ID is null. Cannot proceed with the update.');
        }
      } else {
        console.error('Chambre is undefined. Cannot proceed with the update.');
      }
    } else {
      console.error('Form is invalid. Cannot submit.');
    }
  }

  private updateSejour(updatedSejourData: any) {
    this.sSejour.updateHistoriqueSejour(updatedSejourData).subscribe({
      next: (updatedSejour: Sejour) => {
        console.log(updatedSejour);
        this.historiqueSejour = updatedSejour;
        console.log('Séjour mis à jour avec succès', this.historiqueSejour);
        // Naviguez ou effectuez d'autres actions après la mise à jour du séjour
      },
      error: (error) => {
        console.error('Error updating sejour:', error);
      }
    });
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
