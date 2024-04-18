import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TarifService } from 'src/app/services/tarif.service';
import { Tarif } from 'src/app/model/Tarif';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-showtarif',
  templateUrl: './showtarif.component.html',
  styleUrls: ['./showtarif.component.scss'],
})
export class ShowTarifComponent implements OnInit {
  tarifList: Tarif[] = [];
  selectedTarif: Tarif | undefined;

  constructor(
    private tarifService: TarifService,
    private route: ActivatedRoute,
    private reservationService: ReservationsService
  ) {}

  ngOnInit(): void {
    this.loadTarifList();
  }

  loadTarifList(): void {
    this.tarifService.getAllTarif().subscribe(
      (tarifs: Tarif[]) => {
        this.tarifList = tarifs;
      },
      (error) => {
        console.error('Error fetching Tarif items:', error);
      }
    );
  }

  getPromoCode(tarif: Tarif): void {
    this.selectedTarif = tarif;

    if (this.selectedTarif) {
      alert(`Promo Code: ${this.selectedTarif.codepromo}`);
    } else {
      console.error('No selected tarif to show promo code.');
    }
  }
}
