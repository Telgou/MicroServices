package twin.microservice.gestionrestaurant.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestionrestaurant.entities.Restaurant;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {
    Restaurant findByNomR(String nomR);


}
