package com.example.microservice.controller;


import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Reclamation;

import com.example.microservice.entite.Suggestion;
import com.example.microservice.service.IReclamationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Reclamation")
public class ReclamationController {
    IReclamationService reclamationService;
    @GetMapping("/allReclamation/{id}")
    Reclamation reclamationById(@PathVariable Long id)
    {
        return reclamationService.retrieveReclamation(id);
    }
    @GetMapping("/restieve-all-reclamations")
    public List<Reclamation> getreclamation(){
        List<Reclamation> listreclamation = reclamationService.retrieveAllReclamation();
        return listreclamation;
    }
    @PostMapping("/add-Reclamation")
    public Reclamation addReclamation(@RequestBody Reclamation r) {
        Reclamation reclamation = reclamationService.addReclamation(r);

        return reclamation;
    }
    @PutMapping("/update-Reclamation/{id}")
    Reclamation updateSuggestion(@RequestBody Reclamation reclamation, @PathVariable Long id)
    {
        reclamation.setIdReclamation(id);
        Reclamation reclamation1 =reclamationService.updateReclamation(reclamation);
        return reclamation1/*ISuggestionService.update(suggestion)*/;
    }
    @DeleteMapping("/remove-Reclamation/{Reclamation-id}")
    public void removeReclamation (@PathVariable ("Reclamation-id") Long idReclamation) {
        Reclamation reclamation = reclamationService.removeReclamation(idReclamation);
    }
    @GetMapping("/stat")
    public ResponseEntity<String> calculateReclamationStatus() {
        try {
            String status = reclamationService.calculateReclamationStatus();
            return ResponseEntity.ok(status);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Erreur lors du calcul du statut de la réclamation");
        }
    }

}
