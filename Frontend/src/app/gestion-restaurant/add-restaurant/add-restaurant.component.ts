import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restaurant } from 'src/app/model/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent {
  @Output() restaurantAdded = new EventEmitter<string>();

  addRestaurantForm: FormGroup;

  formSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService
  ) {
    this.addRestaurantForm = this.fb.group({
      // Remove idRestaurant from the form, assuming it's generated on the server side
      nomR: ['', Validators.required],
      nbPlacesR: ['', [Validators.required, Validators.min(1)]], // Validate that nbPlacesR is a positive number
      adresseR: ['', Validators.required]
    });
  }

  onSubmit() {
    this.formSubmitted = true;

    if (this.addRestaurantForm.valid) {
      const restaurant: Restaurant = this.addRestaurantForm.value;

      this.restaurantService.addRestaurant(restaurant).subscribe(
        () => {
          // Reset form and emit success message
          this.resetForm();
          this.restaurantAdded.emit('Restaurant added successfully');
          alert('Restaurant added successfully');
        },
        (error) => {
          console.error('Error adding restaurant:', error);
          // Handle error, e.g., show an alert or update the UI
        }
      );
    }
  }

  resetForm() {
    this.addRestaurantForm.reset();
    this.formSubmitted = false;
  }
}
