package com.example.hrmicroservice.services;

import com.example.hrmicroservice.entities.Employe;

import java.util.List;

public interface iEmployeService {

    List<Employe> retrieveAllEmployes();

    Employe addEmploye(Employe e);

    Employe updateEmploye(Employe e);

    Employe retrieveEmploye(Long idEmploye);

    void removeEmploye(Long idEmploye);

}