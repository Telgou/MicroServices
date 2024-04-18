package twin.microservice.gestiondesreservations.services;

import twin.microservice.gestiondesreservations.entities.Reservation;
import twin.microservice.gestiondesreservations.entities.Tarif;

import java.util.List;
import java.util.Optional;

public interface ITarifService {
    Tarif addTarif (Tarif tarif);
    List<Tarif> getTarif();
    Tarif update(Tarif tarif);
    void delete(Long id);
    Optional<Tarif> getTarifById(Long id);
}
