import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Sejour } from 'src/app/model/Sejour';
import { SejourService } from 'src/app/services/sejour.service';

@Component({
  selector: 'app-detail-sejour',
  templateUrl: './detail-sejour.component.html',
  styleUrls: ['./detail-sejour.component.scss']
})
export class DetailSejourComponent {
  sejour!: Sejour;
  idSejour: any;
  qrCodeImage$!: Observable<string>; // Déclarez la propriété qrCodeImage$

  constructor(
    private route: ActivatedRoute,
    private sSejour: SejourService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('idSejour');
      if (idParam !== null) {
        const sejourId = +idParam;
        this.sSejour.getHistoriqueSejourById(sejourId).subscribe((sejour) => {
          this.sejour = sejour;

          // Chargez le code QR ici
          this.loadQRCodeImage(sejour.idHistSejour);
        });
      } else {
        alert('404 NOT FOUND');
      }
    });
  }

  loadQRCodeImage(idHistorique: number) {
    this.qrCodeImage$ = this.sSejour.generateQRCode(idHistorique).pipe(
      map((blob: Blob) => URL.createObjectURL(blob))
    );
  }

  ngOnDestroy(): void {
    // Révoquer l'URL de l'objet lorsque le composant est détruit pour éviter les fuites de mémoire
    if (this.qrCodeImage$) {
      this.qrCodeImage$.subscribe((url) => URL.revokeObjectURL(url));
    }
  }

  modfier(idSejour: any) {
    this.router.navigate(['gestion-sejour/updateSe', idSejour]);
  }
  goback(){
    this.router.navigate(['gestion-sejour/show-sejour']);
  }
}
