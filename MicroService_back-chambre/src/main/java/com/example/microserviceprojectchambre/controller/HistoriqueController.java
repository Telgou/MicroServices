package com.example.microserviceprojectchambre.controller;
import com.example.microserviceprojectchambre.entite.Chambre;

import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import com.example.microserviceprojectchambre.service.IHistoriqueService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/historique")
public class HistoriqueController {

    @Autowired
    private IHistoriqueService historiqueService;

    @PostMapping("/add")
    public HistoriqueSejour addHistoriqueSejour(@RequestBody HistoriqueSejour historiqueSejour) {
        return historiqueService.addHistoriqueSejour(historiqueSejour);
    }

    @GetMapping("/all")
    public List<HistoriqueSejour> getAllHistoriquesSejour() {
        return historiqueService.getAllHistoriquesSejour();
    }

    @GetMapping("/{id}")
    public HistoriqueSejour getHistoriqueSejourById(@PathVariable int id) {
        return historiqueService.getHistoriqueSejourById(id);
    }

    @PutMapping("/update")
    public ResponseEntity<HistoriqueSejour> updateHistoriqueSejour(@RequestBody HistoriqueSejour historiqueSejour) {
        HistoriqueSejour updatedSejour = historiqueService.updateHistoriqueSejour(historiqueSejour);
        if (updatedSejour != null) {
            return new ResponseEntity<>(updatedSejour, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/delete/{id}")
    public void deleteHistoriqueSejour(@PathVariable int id) {
        historiqueService.deleteHistoriqueSejour(id);
    }



    @GetMapping("/getChambreByHistoriqueSejourId/{idHistSejour}")
    public ResponseEntity<Chambre> getChambreByHistoriqueSejourId(@PathVariable int idHistSejour) {
        Chambre chambre = historiqueService.getChambreByHistoriqueSejourId(idHistSejour);

        if (chambre != null) {
            return ResponseEntity.ok(chambre);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/historique/qr/{idHistorique}")
    public void generateQRCode(@PathVariable int idHistorique, HttpServletResponse response) {
        historiqueService.generateQRCode(idHistorique, response);
    }


    @GetMapping("/chambreSejour/{id}")
    Chambre retrieveChambreSejour(@PathVariable int id)
    {
        HistoriqueSejour sejour = historiqueService.getHistoriqueSejourById(id);
        return sejour.getChambre();
    }

}
