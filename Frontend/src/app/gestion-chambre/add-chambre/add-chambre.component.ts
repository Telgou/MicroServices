import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/services/chambre.service';
import { TypeChambre } from 'src/app/model/typeChambre';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
@Component({
  selector: 'app-add-chambre',
  templateUrl: './add-chambre.component.html',
  styleUrls: ['./add-chambre.component.scss'],
})
export class AddChambreComponent {
  addCh: FormGroup;
  typeChambre = TypeChambre;

  constructor(private fb: FormBuilder, private chService: ChambreService , private router: Router) {
    this.addCh = this.fb.group({
      numChambre: ['', Validators.required],
      typeC: [null, Validators.required], // Initialisez à null
      etage: ['', Validators.required], // Ajoutez les champs manquants
      tarif: ['', Validators.required], // Ajoutez les champs manquants
    });
  }

  onSubmit() {
    if (this.addCh.valid) {
      const ch: Chambre = this.addCh.value; // Utilisez la classe Chambre
      this.chService.addChambre(ch).subscribe((data) => {
        console.log(data);
        alert('Chambre ajoutée avec succès');
        this.router.navigate(['/gestion-chambre/show-chambre']);
      });
    }
  }
}
