import { Reservations } from './../../model/Reservations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { TarifService } from 'src/app/services/tarif.service';


@Component({
  selector: 'app-detail-reservation',
  templateUrl: './detail-reservation.component.html',
  styleUrls: ['./detail-reservation.component.scss']
})
export class DetailReservationComponent implements OnInit {
  reservation: Reservations | undefined;
  idreservation: any;
  codePromo: string = ''; // Add this line to declare codePromo
  selectedTarif: any; // Add this line to declare selectedTarif

  constructor(
    private route: ActivatedRoute,
    private sReservation: ReservationsService,
    private router: Router,
    private tservice: TarifService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idreservation = params['idreservation']; // Use the correct parameter name

      console.log('ID Parameter:', this.idreservation);

      if (this.idreservation) {
        this.sReservation.getReservationById(this.idreservation).subscribe(
          reservation => {
            console.log('Reservation Data:', reservation);
            this.reservation = reservation;
          },
          error => console.error('Error fetching reservation:', error)
        );
      } else {
        console.warn('ID Parameter is null or undefined.');
        // Handle the case where idreservation is null if needed
      }
    });
  }

  addReservation() {
    this.router.navigate(['/gestion-reservation/addRes']);
  }

  codePromoApplied = false;
  applyCodePromo() {
    if (!this.codePromoApplied && this.codePromo) {
      this.codePromoApplied = true;
      // Fetch the tarif associated with the provided code promo
      this.tservice.getTarifByCodePromo(this.codePromo).subscribe(
        tarif => {
          this.selectedTarif = tarif;
  
          if (this.reservation && this.selectedTarif && 'remise' in this.selectedTarif) {
            const remise = this.selectedTarif.remise;
  
            if (remise !== undefined) {
              // Apply the logic for applying promo code
              this.reservation.montant = (this.reservation.montant ?? 0) - (this.reservation.montant ?? 0) * (remise / 100);
              this.sReservation.updateReservation(this.reservation).subscribe(
                updatedReservation => {
                  // Optionally, you can handle the updated reservation here
                  console.log('Reservation updated:', updatedReservation);
                },
                error => {
                  console.error('Error updating reservation:', error);
                  // Handle the error as needed
                }
              );
            } else {
              console.error('Remise is undefined for the selected tarif.');
            }
          } else {
            console.error('No selected reservation, tarif, or remise property in the tarif.');
          }
        },
        error => {
          console.error('Error fetching tarif by code promo:', error);
          // Handle the error as needed
        }
      );
    } else {
      console.error('Code Promo is empty.');
    }
  }
  
  
  

}
