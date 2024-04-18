package com.example.hrmicroservice.services;

import com.example.hrmicroservice.entities.Formation;

import java.util.List;

public interface iFormationService {

    List<Formation> retrieveAllFormations();

    Formation addFormation(Formation e);

    Formation updateFormation(Formation e);

    Formation retrieveFormation(Long idFormation);

    void removeFormation(Long idFormation);

}