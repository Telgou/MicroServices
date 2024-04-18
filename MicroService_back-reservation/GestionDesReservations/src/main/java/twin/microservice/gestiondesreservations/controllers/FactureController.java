package twin.microservice.gestiondesreservations.controllers;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.services.FactureServiceImp;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/facture")
public class FactureController {
    @Autowired
    FactureServiceImp factureServiceImp;

    @PostMapping("/addFacture/{idReservation}")
    public ResponseEntity<Facture> addFacture(@RequestBody Facture facture, @PathVariable long idReservation) {
        // Set the date from the request
        facture.setDateFacturation(new Date());

        // Add the facture
        Facture addedFacture = factureServiceImp.addFacture(facture, idReservation);

        return new ResponseEntity<>(addedFacture, HttpStatus.CREATED);
    }

    @PutMapping("/updateFacture")
    Facture updateFacture(@RequestBody Facture facture)
    {
        return  factureServiceImp.update(facture);
    }
    @GetMapping("/allFacture")
    List<Facture> allFacture(){
        return factureServiceImp.getFacture();
    }

    @GetMapping("/Facture/{id}")
    Optional<Facture> FactureById(@PathVariable Long id)
    {
        return factureServiceImp.getFactureById(id);
    }

    @DeleteMapping("/deleteFacture/{id}")
    void delete(@PathVariable Long id)
    {
        factureServiceImp.delete(id);
    }
}

