import { TypeChambre } from 'src/app/model/typeChambre';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { Chambre } from 'src/app/model/Chambre'; // Assurez-vous d'importer TypeChambre

@Component({
  selector: 'app-update-chambre',
  templateUrl: './update-chambre.component.html',
  styleUrls: ['./update-chambre.component.scss'],
})
export class UpdateChambreComponent implements OnInit {

  chForm: FormGroup;
  idChambre: number;
  typeChambreEnum = Object.keys(TypeChambre);

  constructor(
    private fb: FormBuilder,
    private sChambre: ChambreService,
    private ac: ActivatedRoute,
    private router: Router
  ) {
    this.idChambre = this.ac.snapshot.params['idChambre'];
    console.log(this.idChambre);

    this.chForm = this.fb.group({
       idChambre:this.idChambre,
      numChambre: ['', Validators.required],
      typeC: ['', Validators.required],
      etage: [null, Validators.required],
      tarif: [null, Validators.required],
    });
  }

  ngOnInit() {
    this.sChambre.getChambreById(this.idChambre).subscribe(data => {
      this.chForm.patchValue(data || new Chambre());
    });
  }

  update() {
    if (this.chForm.valid) {
      const updatedData = this.chForm.value;

      this.sChambre.updateChambre(updatedData).subscribe({
        next: (updateData) => {
          if (updateData !== null) {
            console.log('Chambre mise à jour avec succès:', updateData);
            alert('Chambre mise à jour avec succès');
            this.router.navigate(['gestion-chambre/show-chambre']);
          } else {
            console.error('La réponse de mise à jour est null.');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de la chambre:', error);
        },
      });
    }
  }
}
