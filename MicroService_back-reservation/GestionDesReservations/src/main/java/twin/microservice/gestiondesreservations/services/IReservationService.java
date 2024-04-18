package twin.microservice.gestiondesreservations.services;

import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.entities.Reservation;

import java.util.List;
import java.util.Optional;

public interface IReservationService {
    Reservation addReservation (Reservation reservation);
    List<Reservation> getReservation();
    Reservation update(Reservation reservation);
    void delete(Long id);
    Optional<Reservation> getReservationById(Long id);
}
