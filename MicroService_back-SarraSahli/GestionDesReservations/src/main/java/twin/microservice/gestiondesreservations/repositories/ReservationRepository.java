package twin.microservice.gestiondesreservations.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import twin.microservice.gestiondesreservations.entities.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation,Long> {
}
