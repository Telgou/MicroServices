import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { EtatProp } from 'src/app/model/EtatProp';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-show-etat',
  templateUrl: './show-etat.component.html',
  styleUrls: ['./show-etat.component.scss']
})
export class ShowEtatComponent {
  etats!: EtatProp[];

  constructor(
    private SEtat: EtatService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.SEtat.getAllEtatsProp().subscribe({
      next: (data: EtatProp[]) => {
        console.log(data);
        this.etats = data;
      },
      error: (error) => {
        console.error("NotFound", error);
      }
    });
  }
  addEtat(){
    this.router.navigate(['gestion-etat/add-etat'])
  }

  showDetails(id: any) {
    this.router.navigate(['/gestion-etat/detail-etat', id]);
  }



  editCh(id: any) {
    this.router.navigate(['gestion-etat/update-etat', id]);
  }

  deleteCh(ch: EtatProp) {
    this.SEtat.deleteEtatProp(ch.idEtat).subscribe(() => {
      console.log('Etat supprimée avec succès');
      alert('Etat supprimée avec succès');
      window.location.reload();
    });
  }
}
