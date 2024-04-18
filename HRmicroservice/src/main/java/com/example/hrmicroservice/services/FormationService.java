package com.example.hrmicroservice.services;


import com.example.hrmicroservice.repositories.FormationRepository;
import com.example.hrmicroservice.entities.Formation;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@Slf4j
public class FormationService implements iFormationService {
    FormationRepository formationRepository;
    @Override
    public List<Formation> retrieveAllFormations() {
        return formationRepository.findAll();
    }

    @Override
    public Formation addFormation(Formation e) {
        return formationRepository.save(e);
    }

    @Override
    public Formation updateFormation(Formation e) {
        return formationRepository.save(e);
    }

    @Override
    public Formation retrieveFormation(Long idFormation) {
        return formationRepository.findById(idFormation).get();
    }

    @Override
    public void removeFormation(Long idFormation) {
        formationRepository.deleteById(idFormation);
    }

}