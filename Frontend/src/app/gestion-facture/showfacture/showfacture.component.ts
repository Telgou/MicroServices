import { Component, OnInit } from '@angular/core';
import { Facture } from 'src/app/model/Facture';
import { FactureService } from 'src/app/services/facture.service';
import { ActivatedRoute, Router } from '@angular/router';  // Import Router

@Component({
  selector: 'app-showfacture',
  templateUrl: './showfacture.component.html',
  styleUrls: ['./showfacture.component.scss'],
})
export class ShowfactureComponent implements OnInit {
  factures: Facture[] = [];
  selectedReservationId!: number;

  constructor(private factureService: FactureService,private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loadFactures();
  }

  loadFactures() {
    this.factureService.getAllFactures().subscribe((data: any) => {
      console.log(data);
      this.factures = data;
    });
  }

  deleteFacture(facture: Facture) {
    this.factureService.deleteFacture(facture).subscribe(() => {
      console.log('Facture deleted successfully.');
      this.loadFactures(); // Refresh the list after deletion
    });
  }
  payerFacture(idReservation: number) {
    // Store the selected reservation ID before navigating
    this.selectedReservationId = idReservation;
    this.router.navigate(['/add-facture', idReservation]);
  }

  
  updateFacture(factureid: number) {
    console.log('Editing facture with ID:', factureid);
    this.router.navigate(['/updateFacture', factureid]);
  }
  
  // Add other methods for CRUD operations as needed
}
