import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/services/ServiceEntity.service';  // Update the path accordingly
import { MessageService } from 'src/app/services/message.service';  // Update the path accordingly
import { ServiceEntity } from '../../model/ServiceEntity';  // Update the path accordingly

@Component({
  selector: 'app-show-service',
  templateUrl: './show-service.component.html',
  styleUrls: ['./show-service.component.scss']
})
export class ShowServiceComponent implements OnInit {
  @Input() newService: ServiceEntity | null = null;
  @Output() serviceDeleted = new EventEmitter<ServiceEntity>();

  services: ServiceEntity[] = [];
  searchTerm: string = '';

  constructor(
    private ServiceService: ServiceService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Retrieve all existing services
    this.ServiceService.getAllServices().subscribe((data: ServiceEntity[]) => {
      console.log('Existing services:', data);
      this.services = data;
    });
  
    // Subscribe to the success message
    this.messageService.successMessage$.subscribe((message) => {
      if (message) {
        console.log('Success message:', message);
  
        // If the success message indicates a new service was added
        if (message.includes('Service added successfully')) {
          // Retrieve the updated list of services (including the new one)
          this.ServiceService.getAllServices().subscribe((updatedData: ServiceEntity[]) => {
            console.log('Updated services after addition:', updatedData);
            this.services = updatedData;
          });
        }
      }
    });
  }

  addService() {
    this.router.navigate(['/add-service']);  // Update the path accordingly
  }

  showDetails(idService: any) {
    this.router.navigate(['/path-to-service-details', idService]);  // Update the path accordingly
  }

  deleteService(service: ServiceEntity) {
    this.ServiceService.deleteService(service.idService).subscribe(() => {
      this.messageService.sendSuccessMessage('Service deleted successfully');
      this.serviceDeleted.emit(service);
    });
  }
  
  editService(serviceId: number) {
    console.log('Editing service with ID:', serviceId);
    this.router.navigate(['gestion-services/UpdateService/', serviceId]);  // Update the path accordingly
  }

  get filteredServices() {
    return this.services.filter(
      (service) =>
        service.idService.toString().includes(this.searchTerm) ||
        service.menuS.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        service.serveurS.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
