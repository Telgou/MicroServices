import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';


@Component({
  selector: 'app-update-reservation',
  templateUrl: './update-reservation.component.html',
  styleUrls: ['./update-reservation.component.scss']
})

export class UpdateReservationComponent implements OnInit {
  reservation: Reservations = new Reservations();
  idReservation!: number;
  constructor(private sReservation: ReservationsService, private ac: ActivatedRoute) {}
  ngOnInit() {
    const reservationIdParam = this.ac.snapshot.paramMap.get('reservationId');
    
    // Check if reservationIdParam is not null or undefined before using it
    if (reservationIdParam !== null && reservationIdParam !== undefined) {
      this.idReservation = +reservationIdParam;
      
      // Fetch reservation details by ID
      this.sReservation.getReservationById(this.idReservation).subscribe(
        (data: any) => { // Explicitly cast data to Reservations type
          // Ensure that data is not null before assigning it

          if (data !== null) {
            this.reservation = data;
          } else {
            console.error('Error: Reservation data is null');
          }
        },
        (error) => {
          console.error('Error fetching reservation details:', error);

        }
      );
    } else {
      console.error('Error: Reservation ID is null or undefined');

    }
  }

  updateReservation() {
    // Set the id property of the reservation object
    this.reservation.idreservation = this.idReservation;

    this.sReservation.updateReservation(this.reservation).subscribe(() => {
      console.log('Reservation updated successfully');
    });
    console.log(this.reservation);

  }
}
