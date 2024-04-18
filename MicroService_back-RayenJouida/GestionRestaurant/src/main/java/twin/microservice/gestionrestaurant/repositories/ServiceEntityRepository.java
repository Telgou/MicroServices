package twin.microservice.gestionrestaurant.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestionrestaurant.entities.ServiceEntity;

public interface ServiceEntityRepository extends JpaRepository<ServiceEntity,Long> {
}
