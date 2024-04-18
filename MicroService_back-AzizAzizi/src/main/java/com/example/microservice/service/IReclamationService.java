package com.example.microservice.service;

import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Reclamation;
import com.example.microservice.repository.ReclamationRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface IReclamationService {

    static Reclamation update(Reclamation reclamation) {
        return reclamation;
    }


    Reclamation addReclamation(Reclamation r);

    Reclamation updateReclamation(Reclamation r);

    Reclamation removeReclamation(Long idReclamation);

    String calculateReclamationStatus();



    List<Reclamation> retrieveAllReclamation();

    Reclamation retrieveReclamation(Long idReclamation);
}
