package twin.microservice.gestionrestaurant.services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import twin.microservice.gestionrestaurant.entities.Restaurant;
import twin.microservice.gestionrestaurant.repositories.RestaurantRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@AllArgsConstructor
@Service

public class RestaurantServiceImp implements IRestaurantService{
    @Autowired
    RestaurantRepository restaurantRepository;

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {

        return restaurantRepository.save(restaurant);
    }
    @Override
    @Transactional

    public Restaurant update(Restaurant restaurant) {
        Long id = restaurant.getIdRestaurant();
        System.out.println("Attempting to update restaurant with ID: " + id);

        Restaurant existingRestaurant = restaurantRepository.findById(id)
                .orElseThrow(() -> {
                    System.out.println("EntityNotFoundException thrown!");
                    return new EntityNotFoundException("No Restaurant with id " + id + " was found!");
                });

                existingRestaurant.setNomR(restaurant.getNomR());
            existingRestaurant.setAdresseR(restaurant.getAdresseR());
            existingRestaurant.setNbPlacesR(restaurant.getNbPlacesR());

        restaurantRepository.save(existingRestaurant);

        return existingRestaurant;
    }
    @Override
    public void delete(Long id) {
        restaurantRepository.deleteById(id);

    }
    @Override
    public List<Restaurant> getAllRestaurant() {
        return restaurantRepository.findAll();
    }

    public Restaurant getRestaurantById(Long idRestaurant) {
        return restaurantRepository.findById(idRestaurant).orElse(null);
    }
    @Override
    public Long getRestaurantIdByName(String nomR) {
        Restaurant restaurant = restaurantRepository.findByNomR(nomR);
        return restaurant != null ? restaurant.getIdRestaurant() : null;
    }



}
