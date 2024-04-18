import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { ReservationsService } from 'src/app/services/reservations.service';
import { Reservations } from '../../model/Reservations';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-show-reservation',
  templateUrl: './show-reservation.component.html',
  styleUrls: ['./show-reservation.component.scss'],
})
export class ShowReservationComponent implements OnInit {
  reservations: any[] = [];
  searchTerm: string = '';
  selectedReservationId: number | null = null; // Store the selected reservation ID
console: any;
  constructor(
    private sReservation: ReservationsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const data: Observable<Data> = this.route.root.firstChild?.data as Observable<Data>;
    data.subscribe((resolvedData) => {
      this.selectedReservationId = resolvedData?.['tarifId']; // Corrected variable name
      this.sReservation.getAllReservations().subscribe((data: any) => {
        console.log(data);
        this.reservations = data;
      });
    });
  }


  addReservation() {
    this.router.navigate(['/gestion-reservation/addRes']); // Naviguer vers la page d'ajout
  }

  showDetails(idreservation: any) {
    // Store the selected reservation ID before navigating
    this.selectedReservationId = idreservation;
    this.router.navigate(['/gestion-reservation/detailRes', idreservation]);
  }

  deleteReservation(resv: Reservations) {
    console.log('Deleting reservation:', resv);
    this.sReservation.deleteReservation(resv).subscribe(() => {
      console.log('Deleted reservation:', resv);
      this.loadReservations(); // Refresh the list after deletion
    });
  }
  

  loadReservations() {
    this.sReservation.getAllReservations().subscribe((data:any)=>{
      console.log(data);
      this.reservations=data;
    });
  }
  
 
  navigateToShowTarif(): void {
    this.router.navigate(['/showtarif']);
  }



  editReservation(reservationId: number) {
    console.log('Editing reservation with ID:', reservationId);
    this.router.navigate(['/gestion-reservation/updateReservation', reservationId]);
  }

  payerFacture(idReservation: number) {
    // Navigate to the 'add-facture' route with the corresponding reservation ID
    this.router.navigate(['/add-facture', idReservation]);
  }


}
