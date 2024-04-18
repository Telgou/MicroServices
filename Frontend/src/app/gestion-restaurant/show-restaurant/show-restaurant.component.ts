
// show-restaurant.component.ts
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { MessageService } from 'src/app/services/message.service';
import { Restaurant } from '../../model/Restaurant';

@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.scss']
})
export class ShowRestaurantComponent implements OnInit {
  @Input() newRestaurant: Restaurant | null = null;
  @Output() restaurantDeleted = new EventEmitter<Restaurant>();

  restaurants: Restaurant[] = [];
  searchTerm: string = '';

  constructor(
    private restaurantService: RestaurantService,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // Retrieve all existing restaurants
    this.restaurantService.getAllRestaurants().subscribe((data: Restaurant[]) => {
      console.log('Existing restaurants:', data);
      this.restaurants = data;
    });
  
    // Subscribe to the success message
    this.messageService.successMessage$.subscribe((message) => {
      if (message) {
        console.log('Success message:', message);
  
        // If the success message indicates a new restaurant was added
        if (message.includes('Restaurant added successfully')) {
          // Retrieve the updated list of restaurants (including the new one)
          this.restaurantService.getAllRestaurants().subscribe((updatedData: Restaurant[]) => {
            console.log('Updated restaurants after addition:', updatedData);
            this.restaurants = updatedData;
          });
        }
      }
    });
  }
  

  addRestaurant() {
    this.router.navigate(['/gestion-restaurant/addRestaurant']);
  }

  showDetails(idRestaurant: any) {
    this.router.navigate(['/gestion-restaurant/detailRestaurant', idRestaurant]);
  }

  deleteRestaurant(restaurant: Restaurant) {
    this.restaurantService.deleteRestaurant(restaurant.idRestaurant).subscribe(() => {
      this.messageService.sendSuccessMessage('Restaurant deleted successfully');
      this.restaurantDeleted.emit(restaurant);
    });
  }

  editRestaurant(restaurantId: number) {
    console.log('Editing restaurant with ID:', restaurantId);
    this.router.navigate(['/gestion-restaurant/updateRestaurant', restaurantId]);
  }

  get filteredRestaurants() {
    return this.restaurants.filter(
      (restaurant) =>
        restaurant.idRestaurant.toString().includes(this.searchTerm) ||
        restaurant.nomR.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        restaurant.adresseR.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
