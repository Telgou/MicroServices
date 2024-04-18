import { Component, OnInit } from '@angular/core';
import { ServiceEntity } from 'src/app/model/ServiceEntity';
import { ServiceService } from 'src/app/services/ServiceEntity.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {

  service: ServiceEntity = new ServiceEntity();

  constructor(private serviceService: ServiceService, private snackBar: MatSnackBar,    private route: ActivatedRoute,
    private router: Router
) {}

  ngOnInit() {
    // Additional initialization logic if needed
  }

  addService() {
    console.log('Menu Selected:', this.service.menuS);
    if (!this.service.menuS || !this.service.serveurS || !this.service.numCh) {
      // Updated to check for the correct attributes
      alert('Please fill in all required fields.');
      return;
    }

    // Call the API to add the service
    this.serviceService.addService(this.service).subscribe(
      () => {
        console.log('Service added successfully');
        alert('Service added successfully');
        this.snackBar.open('Service added', '', {
          duration: 3000,
          verticalPosition: 'top',
        });
        this.router.navigate(['/success-page']);


        // Additional actions if needed
      },
      (error) => {
        console.error('Error adding service:', error);
        // Handle error as needed
      }
    );
  }
  
  generatePdf(idService: number) {
    this.serviceService.generateServiceReportPdf(idService)
      .subscribe(
        (pdfUrl: string) => {
          console.log('PDF generated successfully:', pdfUrl);
          // Handle the PDF file URL (open in a new tab or perform other actions)
          window.open(pdfUrl, '_blank');
        },
        (error) => {
          console.error('Error generating PDF:', error);
          // Handle the error (display an error message, etc.)
        }
      );
  }
  


}
