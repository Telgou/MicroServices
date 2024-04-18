package com.example.microserviceprojectchambre.service;

import com.example.microserviceprojectchambre.entite.Chambre;
import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import jakarta.servlet.http.HttpServletResponse;

import java.util.List;
import java.util.Optional;

public interface IHistoriqueService {

    HistoriqueSejour addHistoriqueSejour(HistoriqueSejour historiqueSejour);

    List<HistoriqueSejour> getAllHistoriquesSejour();

    HistoriqueSejour getHistoriqueSejourById(int idHistSejour);

    HistoriqueSejour updateHistoriqueSejour(HistoriqueSejour historiqueSejour);

    void deleteHistoriqueSejour(int idHistSejour);
    public Chambre getChambreByHistoriqueSejourId(int idHistSejour);
    public void generateQRCode(int idHistorique, HttpServletResponse response);

}
