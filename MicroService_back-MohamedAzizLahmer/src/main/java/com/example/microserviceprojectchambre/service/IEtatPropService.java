package com.example.microserviceprojectchambre.service;

import com.example.microserviceprojectchambre.entite.EtatProp;

import java.util.List;

public interface IEtatPropService {


    EtatProp AddEtatProp(EtatProp etatProp);

    // Opération de lecture (Read)
    List<EtatProp> getAllEtatsProp();

    EtatProp getEtatPropById(int idEtat);

    // Opération de mise à jour (Update)
    EtatProp updateEtatProp(EtatProp EtatProp);

    // Opération de suppression (Delete)
    void deleteEtatProp(int idEtat);
}
