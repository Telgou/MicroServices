package twin.microservice.gestiondesreservations.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Service;
import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.entities.Reservation;
import twin.microservice.gestiondesreservations.repositories.FactureRepository;
import twin.microservice.gestiondesreservations.repositories.ReservationRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class FactureServiceImp implements IFactureService{
    @Autowired
    FactureRepository factureRepository;
    @Autowired
    ReservationRepository reservationRepository;
    @Override
    public Facture addFacture(Facture facture, long idReservation) {
        Reservation reservation = reservationRepository.findById(idReservation)
                .orElseThrow(() -> new EntityNotFoundException("Reservation not found with id: " + idReservation));

        // Set the reservation in the facture
        facture.setReservation(reservation);

        // Set the montant from the reservation to the facture
        facture.setMontant(reservation.getMontant());

        // Set the idreservation in the facture
        facture.setIdreservation(reservation.getIdreservation());

        // Save the facture
        Facture savedFacture = factureRepository.save(facture);

        // Set the factureid in the reservation
        reservation.setFacture(savedFacture);

        // Update the reservation
        reservationRepository.save(reservation);

        return savedFacture;
    }





    public List<Facture> getFacture() {
        return factureRepository.findAll();
    }

    @Override
    public Facture update(Facture facture) {
        {
            Facture facture1= factureRepository.findById(facture.getIdFacture()).orElseThrow(() -> new EntityNotFoundException("No facture with id " + facture.getIdFacture() + " was found!"));
            if (facture1!=null){
                factureRepository.save(facture);}
            return facture1;
        }   }

    @Override
    public void delete(Long id) {
    factureRepository.deleteById(id);
    }

    @Override
    public Optional<Facture> getFactureById(Long id) {
        return factureRepository.findById(id);
    }
}
