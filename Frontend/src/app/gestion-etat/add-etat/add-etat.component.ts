import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-add-etat',
  templateUrl: './add-etat.component.html',
  styleUrls: ['./add-etat.component.scss']
})
export class AddEtatComponent implements OnInit {
  addEt!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private SEtat: EtatService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addEt = this.fb.group({
      etat: ['', Validators.required],
      dateNettoyage: ['', Validators.required],
      personnel: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.addEt.valid) {
      this.SEtat.addEtatProp(this.addEt.value).subscribe(
        (data) => {
          console.log(data);
       alert("GOOOOOOOOOOOOODDD")
       this.router.navigate(['gestion-etat/show-etat'])
        },
        (error: HttpErrorResponse) => {
          console.error('Erreur lors de l\'ajout de l\'état:', error);
          if (error.error) {
            console.error('Erreur détaillée du serveur:', error.error);
          }
          alert('Erreur lors de l\'ajout de l\'état. Vérifiez la console pour plus de détails.');
        }
      );
    }
  }
}
