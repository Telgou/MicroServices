// update-restaurant.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from 'src/app/model/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.scss']
})
export class UpdateRestaurantComponent implements OnInit {
  private _restaurant: Restaurant = new Restaurant();
  restaurantId!: number;

  constructor(
    private restaurantService: RestaurantService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Getter for _restaurant
  get restaurant(): Restaurant {
    return this._restaurant;
  }

  ngOnInit() {
    const restaurantIdParam = this.route.snapshot.paramMap.get('restaurantId') ?? '';

    if (restaurantIdParam) {
      this.restaurantId = +restaurantIdParam;

      this.restaurantService.getRestaurantById(this.restaurantId).subscribe(
        (data: any) => {
          if (data !== null) {
            // Use the setter method to update the restaurant data
            this.setRestaurant(data);
          } else {
            console.error('Error: Restaurant data is null');
          }
        },
        (error) => {
          console.error('Error fetching restaurant details:', error);
          // Handle error as needed
        }
      );
    } else {
      console.error('Error: Restaurant ID is null or undefined');
      // Handle error as needed
    }
  }

  updateRestaurant() {
    this.restaurantService.updateRestaurant(this.restaurantId, this._restaurant).subscribe(
      () => {
        console.log('Restaurant updated successfully');
        alert('Restaurant updated successfully');
        this.router.navigate(['/gestion-restaurant/show-restaurant']);
      },
      (error) => {
        console.error('Error updating restaurant:', error);
        // Handle error as needed
      }
    );
  }
  

  // Setter method to update the restaurant data
  private setRestaurant(data: Restaurant): void {
    this._restaurant = { ...data }; // Using the spread operator to create a new object
  }
}
