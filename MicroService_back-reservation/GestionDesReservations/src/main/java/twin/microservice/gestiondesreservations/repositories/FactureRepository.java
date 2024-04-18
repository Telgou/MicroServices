package twin.microservice.gestiondesreservations.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestiondesreservations.entities.Facture;

public interface FactureRepository extends JpaRepository<Facture, Long> {
}
