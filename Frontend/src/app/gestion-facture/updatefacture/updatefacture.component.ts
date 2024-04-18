import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Facture } from 'src/app/model/Facture';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-update-facture',
  templateUrl: './updatefacture.component.html',
  styleUrls: ['./updatefacture.component.scss'],
  providers: [DatePipe],  // Add DatePipe to the providers array

})

export class UpdateFactureComponent implements OnInit {
  facture: Facture = new Facture();
  idFacture!: number;

  constructor(private factureService: FactureService, private route: ActivatedRoute, private datePipe: DatePipe) {}

  ngOnInit() {
    const factureIdParam = this.route.snapshot.paramMap.get('factureId');

    // Check if factureIdParam is not null or undefined before using it
    if (factureIdParam !== null && factureIdParam !== undefined) {
      this.idFacture = +factureIdParam;

      // Fetch facture details by ID
      this.factureService.getFactureById(this.idFacture).subscribe(
        (data: any) => { // Explicitly cast data to Facture type
          // Ensure that data is not null before assigning it
          if (data !== null) {
            this.facture = data;
            this.facture.dateFacturation = this.formatDate(this.facture.dateFacturation);

          } else {
            console.error('Error: Facture data is null');
          }
        },
        (error) => {
          console.error('Error fetching facture details:', error);
        }
      );
    } else {
      console.error('Error: Facture ID is null or undefined');
    }
  }
  formatDate(dateFacturation: Date): Date {
    throw new Error('Method not implemented.');
  }

  updateFacture() {
    // Set the idFacture property of the facture object
    this.facture.idFacture = this.idFacture;

    this.factureService.updateFacture(this.facture).subscribe(() => {
      console.log('Facture updated successfully');
    });
    console.log(this.facture);
  }
}
