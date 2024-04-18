// update-etat.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EtatService } from 'src/app/services/etat.service';
import { EtatProp } from 'src/app/model/EtatProp';

@Component({
  selector: 'app-update-etat',
  templateUrl: './update-etat.component.html',
  styleUrls: ['./update-etat.component.scss']
})
export class UpdateEtatComponent implements OnInit {
  etat: EtatProp | null = null;
  updateEtatForm: FormGroup;

  constructor(
    private sEtat: EtatService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.updateEtatForm = this.fb.group({
      idEtat: [''], // Ajout de la propriété idEtat dans le formulaire
      etat: ['', Validators.required],
      dateNettoyage: ['', Validators.required],
      personnel: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idEtat = params.get('id');
      if (idEtat) {
        this.loadData(Number(idEtat));
      }
    });
  }

  loadData(idEtat: number) {
    this.sEtat.getEtatPropById(idEtat).subscribe({
      next: (data: EtatProp) => {
        console.log('Etat:', data);
        this.etat = data;

        this.updateEtatForm.patchValue({
          idEtat: this.etat?.idEtat || '', // Remplir l'idEtat dans le formulaire
          etat: this.etat?.etat || '',
          dateNettoyage: this.formatDateForInput(this.etat.dateNettoyage) || '',
          personnel: this.etat?.personnel || '',
        });
      },
      error: (error) => {
        console.error('Error fetching Etat data:', error);
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

  update() {
    if (this.updateEtatForm.valid) {
      const updatedData = this.updateEtatForm.value;
      updatedData.dateNettoyage = new Date(updatedData.dateNettoyage);

      this.sEtat.updateEtatProp(updatedData).subscribe({
        next: (updateData) => {
          if (updateData !== null) {
            console.log('État mis à jour avec succès:', updateData);
            alert('État mis à jour avec succès');
            this.router.navigate(['/gestion-etat/show-etat']);
          } else {
            console.error('La réponse de mise à jour est null.');
          }
        },
        error: (error) => {
          console.error('Erreur lors de la mise à jour de l\'État:', error);
        },
      });
    }
  }
}
