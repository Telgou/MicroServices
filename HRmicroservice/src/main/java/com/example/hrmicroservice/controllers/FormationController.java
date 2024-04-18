package com.example.hrmicroservice.controllers;

import com.example.hrmicroservice.services.FormationService;
import com.example.hrmicroservice.entities.Formation;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/formation")
public class FormationController {
    FormationService formationService;

    @GetMapping("/")
    public List<Formation> getAllFormations() {
        return formationService.retrieveAllFormations();
    }

    @GetMapping("/{id}")
    public Formation getFormationById(@PathVariable Long id) {
        return formationService.retrieveFormation(id);
    }

    @PostMapping("/")
    public Formation addFormation(@RequestBody Formation formation) {
        return formationService.addFormation(formation);
    }

    @PutMapping("/")
    public Formation updateFormation(@RequestBody Formation formation) {
        return formationService.updateFormation(formation);
    }

    @DeleteMapping("/{id}")
    public void deleteFormation(@PathVariable Long id) {
        formationService.removeFormation(id);
    }
}