import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chambre } from 'src/app/model/Chambre';
import { ChambreService } from 'src/app/services/chambre.service';
import { Location } from '@angular/common';
import { Chart } from 'chart.js/auto';
import { TypeChambre } from 'src/app/model/typeChambre';

@Component({
  selector: 'app-show-chambre',
  templateUrl: './show-chambre.component.html',
  styleUrls: ['./show-chambre.component.scss'],
})
export class ShowChambreComponent implements OnInit {
  chambres: Chambre[] = [];
  searchTerm: string = '';

  constructor(
    private sChambre: ChambreService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Récupération de toutes les chambres
    this.sChambre.getAllChambre().subscribe((data: Chambre[]) => {
      console.log(data);
      this.chambres = data;
    });

    // Récupération des pourcentages par type
    this.sChambre.getPourcentagesParType().subscribe(
      (percentageMap) => {
        const simplePercentage = percentageMap['SIMPLE'] || 0;
        const doublePercentage = percentageMap['DOUBLE'] || 0;
        const triplePercentage = percentageMap['TRIPLE'] || 0;

        const canvasElement = document.getElementById('myChart1') as HTMLCanvasElement;

        if (canvasElement) {
          const ctx = canvasElement.getContext('2d');
          canvasElement.style.width = '100px';
          canvasElement.style.height = '100px';

          if (ctx) {
            new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['Chambre Simple', 'Chambre Double', 'Chambre Triple'],
                datasets: [
                  {
                    label: 'Pourcentage',
                    data: [simplePercentage, doublePercentage, triplePercentage],
                    backgroundColor: ['blue', 'green', 'red'],
                    borderWidth: 1,
                  },
                ],
              },
              options: {
                plugins: {
                  legend: {
                    labels: {
                      font: {
                        size: 40// Modifiez la taille de police des étiquettes ici
                      }
                    }
                  }
                },
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              },
            });
          } else {
            console.error('Impossible d\'obtenir le contexte 2D pour l\'élément canvas.');
          }
        } else {
          console.error('Élément avec l\'ID "myChart" introuvable ou n\'est pas un élément canvas.');
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération des pourcentages :', error);
      }
    );
  }

  showDetails(idChambre: any) {
    this.router.navigate(['gestion-chambre/detail-chambre', idChambre]);
  }

  editCh(id: any) {
    this.router.navigate(['gestion-chambre/update-chambre', id]);
  }

  deleteCh(ch: Chambre) {
    this.sChambre.deleteChambre(ch).subscribe(() => {
      console.log('Chambre supprimée avec succès');
      alert('Chambre supprimée avec succès');
      this.router.navigate(['gestion-chambre/detail-chambre']);
      window.location.reload();
    });
  }

  addChambre() {
    this.router.navigate(['/gestion-chambre/add-chambre']);
  }

  get filteredChambres() {
    return this.chambres.filter(
      (chambre) =>
        chambre.idChambre.toString().includes(this.searchTerm) ||
        chambre.numChambre.toString().includes(this.searchTerm) ||
        (chambre.typeC && chambre.typeC.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
        chambre.etage.toString().includes(this.searchTerm) ||
        chambre.tarif.toString().includes(this.searchTerm)
    );
  }

  goBack() {
    this.location.back();
  }
}
