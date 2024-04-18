package twin.microservice.gestionrestaurant.services;

import twin.microservice.gestionrestaurant.entities.Restaurant;

import java.util.List;

public interface IRestaurantService {
    Restaurant addRestaurant(Restaurant restaurant);
    Restaurant update(Restaurant restaurant);
    public void delete(Long id);
    public List<Restaurant> getAllRestaurant();
    Restaurant getRestaurantById(Long idRestaurant);
    public Long getRestaurantIdByName(String restaurantName);
}
