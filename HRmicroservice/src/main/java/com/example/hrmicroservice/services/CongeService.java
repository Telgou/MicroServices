package com.example.hrmicroservice.services;

import com.example.hrmicroservice.repositories.CongeRepository;
import com.example.hrmicroservice.entities.Conge;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class CongeService implements iCongeService {
    private CongeRepository congeRepository;
    @Override
    public List<Conge> retrieveAllConges() {
        return congeRepository.findAll();
    }

    @Override
    public Conge addConge(Conge e) {
        return congeRepository.save(e);
    }

    @Override
    public List<Conge> addConges(List<Conge> e) {
        return congeRepository.saveAll(e);
    }

    @Override
    public Conge updateConge(Conge e) {
        return congeRepository.save(e);
    }

    @Override
    public Conge retrieveConge(Long idConge) {
        return congeRepository.findById(idConge).get();
    }

    @Override
    public void removeConge(Long idConge) {
        congeRepository.deleteById(idConge);
    }


}