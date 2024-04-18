package twin.microservice.gestionrestaurant.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestionrestaurant.entities.Tables;

public interface TablesRepository extends JpaRepository<Tables,Long> {
}
