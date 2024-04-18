package com.example.microserviceprojectchambre.controller;

import com.example.microserviceprojectchambre.entite.EtatProp;
import com.example.microserviceprojectchambre.service.EtatService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Etat")
public class EtatController {

@Autowired
   EtatService etatService;

    @PostMapping("/addEtatProp")
    public EtatProp addEtatProp(@RequestBody EtatProp etatProp) {

        return etatService.AddEtatProp(etatProp);
    }

    @GetMapping("/getAllEtatsProp")
    public List<EtatProp> getAllEtatsProp() {
        return etatService.getAllEtatsProp();
    }

    @GetMapping("/getEtatPropById/{idEtat}")
    public EtatProp getEtatPropById(@PathVariable int idEtat) {
        return etatService.getEtatPropById(idEtat);
    }

    @PutMapping("/updateEtatProp") // Utilisez @PutMapping pour les opérations de mise à jour
    public EtatProp updateEtatProp(@RequestBody EtatProp nouvelEtatProp) {
        return etatService.updateEtatProp(nouvelEtatProp);
    }

    @DeleteMapping("/deleteEtatProp/{idEtat}")
    public void deleteEtatProp(@PathVariable int idEtat) {
        etatService.deleteEtatProp(idEtat);
    }
}
