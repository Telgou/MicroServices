package com.example.microserviceprojectchambre.service;

import com.example.microserviceprojectchambre.entite.Chambre;
import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import com.example.microserviceprojectchambre.entite.TypeChambre;

import java.util.List;
import java.util.Map;

public interface IChambreService {

    Chambre addChambre(Chambre chambre);

    List<Chambre> getall();

    Chambre getById(int numChambre);

    Chambre updateChambre( Chambre chambre);

    void deleteChambre( int idChambre);




    public void affecterHistoriqueSejourAChambre(int idChambre, int idHistorique);

    public void affecterEtatPropreteAChambre(int idChambre, int idEtatProp);
    public void desaffecterHistoriqueSejourDeChambre(int idChambre);
    public void desaffecterEtatPropreteDeChambre(int idChambre);

    public Map<TypeChambre, Double> getPourcentagesParType();
}
