// show-sejour.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sejour } from 'src/app/model/Sejour';
import { Chambre } from 'src/app/model/Chambre';
import { SejourService } from 'src/app/services/sejour.service';
import { forkJoin, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-show-sejour',
  templateUrl: './show-sejour.component.html',
  styleUrls: ['./show-sejour.component.scss']
})
export class ShowSejourComponent implements OnInit {
  sejours: Sejour[] = [];

  constructor(
    private sejourService: SejourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchSejourData();
  }

  private fetchSejourData() {
    this.sejourService.getAllHistoriquesSejour().subscribe({
      next: (sejours: Sejour[]) => {
        this.sejours = sejours;

        // Create an array of observables for chambre requests
        const chambreRequests: Observable<Chambre>[] = this.sejours.map(sejour =>
          this.sejourService.getHistoriqueSejourChambreById(sejour.idHistSejour).pipe(
            catchError(error => {
              console.error(`Error fetching chambre for sejour with id ${sejour.idHistSejour}:`, error);
              return [];
            })
          )
        );

        // Use forkJoin to combine observables into a single observable
        forkJoin(chambreRequests).subscribe({
          next: (chambres: Chambre[]) => {
            // Assuming that Chambre objects are fetched in the same order as Sejour objects
            this.sejours.forEach((sejour, index) => {
              sejour.numChambre = chambres[index].numChambre;
              console.log('afe',sejour.numChambre)
            });
            console.log(sejours)

          },
          error: (error) => {
            console.error('Error fetching chambres:', error);
          }
        });
      },
      error: (error) => {
        console.error('Error fetching sejours:', error);
      }
    });
  }

  showDetails(idSejour: any) {
    this.router.navigate(['/gestion-sejour/detail-sejour', idSejour]);
  }

  editSe(idSejour: any) {
    this.router.navigate(['/gestion-sejour/modifier-sejour', idSejour]);
  }

  addsejour(){
    this.router.navigate(['gestion-sejour/add-sejour']);
  }

  deleteSe(se: Sejour) {
    this.sejourService.deleteHistoriqueSejour(se.idHistSejour).subscribe(
      () => {
        console.log('Sejour supprimée avec succès');
        alert('Sejour supprimée avec succès');
        this.router.navigate(['/gestion-sejour/detail-sejour']);
        window.location.reload();
      },
      (error) => {
        console.error('Une erreur s\'est produite lors de la suppression du sejour:', error);
      }
    );
  }
}
