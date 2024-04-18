package twin.microservice.gestiondesreservations.controllers;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestiondesreservations.entities.Facture;
import twin.microservice.gestiondesreservations.entities.Tarif;
import twin.microservice.gestiondesreservations.services.FactureServiceImp;
import twin.microservice.gestiondesreservations.services.TarifServiceImp;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/tarif")
public class TarifController {
    @Autowired
    TarifServiceImp tarifServiceImp;

    @PostMapping("/addTarif")
    Tarif addTarif(@RequestBody Tarif tarif){
        return tarifServiceImp.addTarif(tarif);
    }
    @PutMapping("/updateTarif")
    Tarif updateTarif(@RequestBody Tarif tarif)
    {
        return  tarifServiceImp.update(tarif);
    }
    @GetMapping("/allTarif")
    List<Tarif> allTarif(){
        return tarifServiceImp.getTarif();
    }

    @GetMapping("/Tarif/{id}")
    Optional<Tarif> TarifById(@PathVariable Long id)
    {
        return tarifServiceImp.getTarifById(id);
    }

    @DeleteMapping("/deleteTarif/{id}")
    void delete(@PathVariable Long id)
    {
        tarifServiceImp.delete(id);
    }

    @GetMapping("/codepromo")
    public ResponseEntity<Tarif> getTarifByCodePromo(@RequestParam String codepromo) {
        Tarif tarif = tarifServiceImp.getTarifByCodePromo(codepromo);

        if (tarif != null) {
            return new ResponseEntity<>(tarif, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
