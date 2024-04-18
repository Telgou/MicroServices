import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
import { Status } from 'src/app/model/Status';
import { ChambreService } from 'src/app/services/chambre.service';
import { SejourService } from 'src/app/services/sejour.service';

@Component({
  selector: 'app-add-sejour',
  templateUrl: './add-sejour.component.html',
  styleUrls: ['./add-sejour.component.scss'],
})
export class AddSejourComponent implements OnInit {
  statusOptions = Object.values(Status);
  addSt!: FormGroup;
  chambres!: Chambre[];

  constructor(
    private fb: FormBuilder,
    private stService: SejourService,
    private sChambre: ChambreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sChambre.getAllChambre().subscribe((data: Chambre[]) => {
      this.chambres = data;
    });
    console.log(this.chambres)

    this.addSt = this.fb.group({
      dateArrivee: ['', Validators.required],
      dateDepart: ['', Validators.required],
      cout: [''],
      statutSejour: [null],
      chambre: [''],
    });
  }

  onSubmit(): void {
    if (this.addSt.valid) {
      const sejour = this.addSt.value;
      this.stService.addHistoriqueSejour(sejour).subscribe({
        next: (data) => {
          console.log(data);
          const chambreSelectionnee: Chambre = sejour.chambre;

          // Vérifier si la chambre existe avant la mise à jour
          this.sChambre.getChambreById(chambreSelectionnee.idChambre).subscribe({
            next: (chambreExistante) => {
              // La chambre existe, procéder à la mise à jour
              this.sChambre
                .affecterHistoriqueSejourAChambre( chambreExistante.idChambre,data.idHistSejour)
                .subscribe({
                  next: () => {
                    console.log('Chambre affectée à un bloc avec succès');
                    alert('Chambre affectée à un bloc avec succès');
                    this.router.navigate(['gestion-sejour/show-sejour']);
                  },
                  error: () => {
                    alert(
                      'Erreur lors de l\'affectation de la chambre à un bloc. Vérifiez la console pour plus de détails.'
                    );
                  },
                });
            },
            error: () => {
              // La chambre n'existe pas, afficher un message d'erreur
              alert('La chambre sélectionnée n\'existe pas. Veuillez sélectionner une chambre valide.');
            },
          });
        },
        error: () => {
          alert(
            'Erreur lors de l\'ajout du séjour. Vérifiez la console pour plus de détails.'
          );
        },
      });
    }
  }

}
