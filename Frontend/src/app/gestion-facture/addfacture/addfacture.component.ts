import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/model/Facture';
import { FactureService } from 'src/app/services/facture.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addfacture',
  templateUrl: './addfacture.component.html',
  styleUrls: ['./addfacture.component.scss']
})
export class AddfactureComponent implements OnInit {
  facture: Facture = new Facture(); // Initialize an empty Facture object

  constructor(
    private factureService: FactureService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Retrieve the selected reservation ID from the route parameters
    this.route.params.subscribe((params) => {
      const idReservation = params['idreservation'];
      if (idReservation) {
        this.facture.idreservation = +idReservation; // Convert to number
      }
    });
  }

  addFacture() {
    this.factureService.addFacture(this.facture, this.facture.idreservation).subscribe(
      (response) => {
        console.log('Facture added successfully:', response);
        // Optionally, you can redirect to the facture list or perform other actions
      },
      (error) => {
        console.error('Error adding facture:', error);
        // Handle error (e.g., show an error message)
      }
    );
  }
}
