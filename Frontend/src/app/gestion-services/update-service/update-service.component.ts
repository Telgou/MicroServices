// update-service.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceEntity } from '../../model/ServiceEntity';
import { ServiceService } from 'src/app/services/ServiceEntity.service';

@Component({
  selector: 'app-update-service',
  templateUrl: './update-service.component.html',
  styleUrls: ['./update-service.component.scss']
})
export class UpdateServiceComponent implements OnInit {
  private _service: ServiceEntity = new ServiceEntity();
  serviceId!: number;

  constructor(
    private serviceService: ServiceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Getter for _service
  get newService(): ServiceEntity {
    return this._service;
  }

  ngOnInit() {
    const serviceIdParam = this.route.snapshot.paramMap.get('serviceId') ?? '';

    if (serviceIdParam) {
      this.serviceId = +serviceIdParam;

      this.serviceService.getServiceById(this.serviceId).subscribe(
        (data: any) => {
          if (data !== null) {
            // Use the setter method to update the service data
            this.setService(data);
          } else {
            console.error('Error: Service data is null');
          }
        },
        (error) => {
          console.error('Error fetching service details:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Error: Service ID is null or undefined');
      // Handle error as needed
    }
  }

  updateService() {
    this.serviceService.updateService(this.serviceId, this._service).subscribe(
      () => {
        console.log('Service updated successfully');
        alert('Service updated successfully');
        this.router.navigate(['/show-service']); // Navigate to the show service component
      },
      (error) => {
        console.error('Error updating service:', error);
        // Handle error as needed
      }
    );
  }

  // Setter method to update the service data
  private setService(data: ServiceEntity): void {
    this._service = { ...data }; // Using the spread operator to create a new object
  }
}
