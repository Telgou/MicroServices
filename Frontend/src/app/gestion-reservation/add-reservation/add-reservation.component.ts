import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Reservations } from 'src/app/model/Reservations';
import { ReservationsService } from 'src/app/services/reservations.service';

@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {
  addRes: FormGroup;


  constructor(private fb: FormBuilder, private sReservation: ReservationsService,private router: Router,private route: ActivatedRoute) {
    this.addRes = this.fb.group({
      idreservation: ['', Validators.required],
      idClient: ['', Validators.required],
      duree: ['', Validators.required],
      montant: [''] // Add this line if montant is needed
    });

  }

onSubmit() {
  if (this.addRes.valid) {
    const reservation:Reservations = this.addRes.value;
    console.log(reservation); // Vérifiez la valeur de estValid ici
    this.sReservation.addReservation(reservation).subscribe((data) => {
      console.log(data);
    });
    this.router.navigate(['gestion-reservation/allres']); 

  }
}


}
