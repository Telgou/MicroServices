package com.example.hrmicroservice.controllers;

import com.example.hrmicroservice.services.CongeService;
import com.example.hrmicroservice.entities.Conge;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/conge")
public class CongeController {
    CongeService congeService;

    @GetMapping("/")
    public List<Conge> getAllConges() {
        return congeService.retrieveAllConges();
    }

    @GetMapping("/{id}")
    public Conge getCongeById(@PathVariable Long id) {
        return congeService.retrieveConge(id);
    }

    @PostMapping("/")
    public Conge addConge(@RequestBody Conge conge) {
        return congeService.addConge(conge);
    }

    @PutMapping("/")
    public Conge updateConge(@RequestBody Conge conge) {
        return congeService.updateConge(conge);
    }

    @DeleteMapping("/{id}")
    public void deleteConge(@PathVariable Long id) {
        congeService.removeConge(id);
    }

    @PostMapping("/addconges")
    public List<Conge> addConges(@RequestBody List<Conge> conges) {
        return congeService.addConges(conges);
    }


}
