package twin.microservice.gestiondesreservations.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.entities.Reservation;
import twin.microservice.gestiondesreservations.services.ReservationServiceImp;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/reservation")
public class ReservationController {
    ReservationServiceImp reservationServiceImp;

    @PostMapping("/addReservation")
     Reservation addReservation(@RequestBody Reservation reservation) {
        return reservationServiceImp.addReservation(reservation);
    }

    @GetMapping("/allReservation")
    List<Reservation> allReservation(){
        return reservationServiceImp.getReservation();
    }

    @GetMapping("/Reservation/{id}")
    Optional<Reservation> ReservationById(@PathVariable Long id)
    {
        return reservationServiceImp.getReservationById(id);
    }
    @PutMapping("/updateReservation")
    Reservation updateReservation(@RequestBody Reservation reservation)
    {
        return  reservationServiceImp.update(reservation);
    }
    @DeleteMapping("/deleteReservation/{id}")
    public void deleteReservation(@PathVariable Long id) {
        reservationServiceImp.delete(id);
    }


}
