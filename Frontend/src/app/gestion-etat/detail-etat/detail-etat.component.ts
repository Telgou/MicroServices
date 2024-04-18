import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtatProp } from 'src/app/model/EtatProp';
import { EtatService } from 'src/app/services/etat.service';

@Component({
  selector: 'app-detail-etat',
  templateUrl: './detail-etat.component.html',
  styleUrls: ['./detail-etat.component.scss']
})
export class DetailEtatComponent {
etat!:EtatProp;
  constructor(
    private router:Router,
    private route:ActivatedRoute,
    private SEtat:EtatService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('idEtat');
      if (idParam !== null) {
        const etatId = +idParam;
        this.SEtat.getEtatPropById(etatId).subscribe({
          next: (etat) => {
            this.etat = etat;
          },
          error: (error) => {
            console.error('Error fetching Etat data:', error);
          }
        });
      } else {
        alert("404 NotFound ");
      }
    });
  }

}
