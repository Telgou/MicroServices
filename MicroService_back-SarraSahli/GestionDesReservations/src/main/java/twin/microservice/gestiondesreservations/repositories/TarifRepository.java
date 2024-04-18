package twin.microservice.gestiondesreservations.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestiondesreservations.entities.Tarif;

public interface TarifRepository extends JpaRepository<Tarif,Long> {
    Tarif findByCodepromo(String codepromo);

}
