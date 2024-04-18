package com.example.hrmicroservice.services;

import com.example.hrmicroservice.entities.*;

import java.util.List;

public interface iCongeService {
    List<Conge> retrieveAllConges();

    Conge addConge(Conge e);

    List<Conge> addConges(List<Conge> e);

    Conge updateConge(Conge e);

    Conge retrieveConge(Long idConge);

    void removeConge(Long idConge);

}
