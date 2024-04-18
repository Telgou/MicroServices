package twin.microservice.gestiondesreservations.services;

import twin.microservice.gestiondesreservations.entities.Facture;

import java.util.List;
import java.util.Optional;

public interface IFactureService {
    Facture addFacture(Facture facture, long idReservation);
    Facture update(Facture facture);
    void delete(Long id);
    Optional<Facture> getFactureById(Long id);
}
