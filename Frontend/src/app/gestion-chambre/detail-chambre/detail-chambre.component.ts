import { ActivatedRoute, Router } from '@angular/router';
import { Chambre } from '../../model/Chambre';
import { Component, OnInit } from '@angular/core';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-detail-chambre',
  templateUrl: './detail-chambre.component.html',
  styleUrls: ['./detail-chambre.component.scss'],
})
export class DetailChambreComponent implements OnInit {
  chambre: Chambre | undefined;
  idChambre: any;

  constructor(
    private route: ActivatedRoute,
    private sChambre: ChambreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('idChambre');
      if (idParam !== null) {
        const chambreId = +idParam;
        this.sChambre.getChambreById(chambreId).subscribe((chambre) => {
          this.chambre = chambre;
        });
      } else {
        // Gérer le cas où l'id n'est pas présent
      }
    });
  }

  editCh(idChambre: any) {
    this.router.navigate(['gestion-chambre/update-chambre',idChambre]);
  }

  goback(){
    this.router.navigate(['gestion-chambre/show-chambre']);
  }
}
