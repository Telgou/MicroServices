package com.example.microserviceprojectchambre.controller;

import com.example.microserviceprojectchambre.entite.Chambre;
import com.example.microserviceprojectchambre.entite.TypeChambre;
import com.example.microserviceprojectchambre.service.ChambreService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/Chambre")
public class ChambreController {

    @Autowired
    ChambreService iChambreService;

    @PostMapping("/addChambre")
    Chambre addChambre (@RequestBody Chambre chambre){return iChambreService.addChambre(chambre);}

    @GetMapping("/getall")
    public List<Chambre> getAllChambres() {
        return iChambreService.getall();
    }

    @GetMapping("/getById/{numChambre}")
    public Chambre getChambreById(@PathVariable int numChambre) {
        return iChambreService.getById(numChambre);
    }

    @PutMapping("/updateChambre")
    public Chambre updateChambre(@RequestBody Chambre chambre) {
        return iChambreService.updateChambre(chambre);
    }

    @DeleteMapping("/deleteChambre/{idChambre}")
    public void deleteChambre(@PathVariable int idChambre) {
        iChambreService.deleteChambre(idChambre);
    }


        @PutMapping("/affecter/{idChambre}/{idHistorique}")
    public void affecterHistoriqueSejourAChambre(
            @PathVariable int idChambre,@PathVariable int idHistorique) {
         iChambreService.affecterHistoriqueSejourAChambre(idChambre,idHistorique);
    }

    @PutMapping("/affecterEtat/{idChambre}/{idEtatProp}")
    public void affecterEtatPropreteAChambre(
            @PathVariable int idChambre, @PathVariable int idEtatProp) {
        iChambreService.affecterEtatPropreteAChambre(idChambre, idEtatProp);
    }

    @PutMapping("/desaffecterHistoriqueSejour/{id}")
    public void desaffecterHistoriqueSejourDeChambre(@PathVariable int id) {

            iChambreService.desaffecterHistoriqueSejourDeChambre(id);




    }

    @PutMapping("/desaffecterEtatProprete/{id}")
    public void desaffecterEtatPropreteDeChambre(@PathVariable int id) {

            iChambreService.desaffecterEtatPropreteDeChambre(id);

    }

    @GetMapping("/pourcentages")
    public Map<TypeChambre, Double> getPourcentagesParType() {
        return iChambreService.getPourcentagesParType();
    }

}
