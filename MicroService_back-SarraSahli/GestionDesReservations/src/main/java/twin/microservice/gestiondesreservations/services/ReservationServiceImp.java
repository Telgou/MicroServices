package twin.microservice.gestiondesreservations.services;


import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.entities.Reservation;
import twin.microservice.gestiondesreservations.repositories.ReservationRepository;


import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReservationServiceImp implements IReservationService{
    @Autowired
    ReservationRepository reservationRepository;
    @Override
    public Reservation addReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    @Override
    public List<Reservation> getReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation update(Reservation reservation) {
        {
            Reservation reservation1 = reservationRepository.findById(reservation.getIdreservation()).orElseThrow(() -> new EntityNotFoundException("No reservation with id " + reservation.getIdreservation() + " was found!"));
            if (reservation1!=null){
                reservationRepository.save(reservation);}
            return reservation1;
        }    }



    @Override
    @Transactional
    public void delete(Long id) {
        reservationRepository.deleteById(id);
    }

    @Override
    public Optional<Reservation> getReservationById(Long id) {
        return reservationRepository.findById(id);
    }
}
