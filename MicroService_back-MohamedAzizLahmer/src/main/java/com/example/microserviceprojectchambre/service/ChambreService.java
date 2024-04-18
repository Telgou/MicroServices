package com.example.microserviceprojectchambre.service;
import com.example.microserviceprojectchambre.entite.EtatProp;

import com.example.microserviceprojectchambre.entite.Chambre;
import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import com.example.microserviceprojectchambre.entite.TypeChambre;
import com.example.microserviceprojectchambre.repository.ChambreRepository;
import com.example.microserviceprojectchambre.repository.HistoriqueRepository;
import com.example.microserviceprojectchambre.repository.EtatPropRepository;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Setter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
@Setter
public class ChambreService implements IChambreService{
  @Autowired
    ChambreRepository chambreRepository;

    @Autowired
    HistoriqueRepository historiqueRepository;

    @Autowired
    EtatPropRepository etatPropRepository;


    @Override
    public Chambre addChambre(Chambre chambre) {
        return chambreRepository.save(chambre);
    }

    @Override
    public List<Chambre> getall() {
        return chambreRepository.findAll();
    }

    @Override
    public Chambre getById(int numChambre) {
        return chambreRepository.findById(numChambre).get();

    }
/*
    @Override
    public Chambre updateChambre(Chambre chambre) {
       Chambre ch=chambreRepository.findById(chambre.getIdChambre()).orElseThrow(()->new EntityNotFoundException("No Chambre with id "+chambre.getIdChambre()+" was Found!"));
       if (ch!=null){
           chambreRepository.save(chambre);}
           return chambre;

    }*/

    @Override
    public Chambre updateChambre(Chambre nouvelleChambre) {
        // Chercher la chambre existante dans la base de données
        Chambre chambreExistante = chambreRepository.findById(nouvelleChambre.getIdChambre())
                .orElseThrow(() -> new EntityNotFoundException("No Chambre with id " + nouvelleChambre.getIdChambre() + " was Found!"));

        // Mettre à jour les propriétés de la chambre existante avec les nouvelles valeurs
        chambreExistante.setNumChambre(nouvelleChambre.getNumChambre());
        chambreExistante.setTypeC(nouvelleChambre.getTypeC());
        chambreExistante.setEtage(nouvelleChambre.getEtage());
        chambreExistante.setTarif(nouvelleChambre.getTarif());

        // Enregistrez la chambre mise à jour
        return chambreRepository.save(chambreExistante);
    }


    @Override
    public void deleteChambre(int idChambre) {
            chambreRepository.deleteById(idChambre);
    }


    @Override
    public void affecterHistoriqueSejourAChambre (int idChambre, int idHistorique) {
        try {

            System.out.println("idChambre: " + idChambre);
            System.out.println("idHistorique: " + idHistorique);
            Optional<Chambre> optionalChambre = chambreRepository.findById(idChambre);
            Optional<HistoriqueSejour> optionalHistoriqueSejour = historiqueRepository.findById(idHistorique);

            if (optionalChambre.isPresent() && optionalHistoriqueSejour.isPresent()) {
                Chambre chambre = optionalChambre.get();
                HistoriqueSejour historiqueSejour = optionalHistoriqueSejour.get();

                historiqueSejour.setChambre(chambre);
                chambre.getHistoriquesSejour().add(historiqueSejour);

                historiqueRepository.save(historiqueSejour);

               chambreRepository.save(chambre);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chambre or HistoriqueSejour not found.");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred: " + e.getMessage(), e);
        }
    }


    @Override
    public void affecterEtatPropreteAChambre(int idChambre, int idEtatProp) {
        try {
            Optional<Chambre> optionalChambre = chambreRepository.findById(idChambre);
            Optional<EtatProp> optionalEtatProp = etatPropRepository.findById(idEtatProp);

            if (optionalChambre.isPresent() && optionalEtatProp.isPresent()) {
                Chambre chambre = optionalChambre.get();
                EtatProp etatProp = optionalEtatProp.get();

                etatProp.setChambre(chambre);

                // Assurez-vous que l'état de propreté est sauvegardé
                etatPropRepository.save(etatProp);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chambre or EtatProp not found.");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred: " + e.getMessage(), e);
        }
    }

    @Override
    @Transactional
    public void desaffecterHistoriqueSejourDeChambre(int idChambre) {
        try {
            Optional<Chambre> optionalChambre = chambreRepository.findById(idChambre);

            if (optionalChambre.isPresent()) {
                Chambre chambre = optionalChambre.get();

                // Retirer tous les historiques de séjour de la chambre
                chambre.getHistoriquesSejour().forEach(historiqueSejour -> historiqueSejour.setChambre(null));
                chambre.getHistoriquesSejour().clear();

                // Assurez-vous que la chambre est mise à jour
                chambreRepository.save(chambre);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chambre not found.");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred: " + e.getMessage(), e);
        }
    }

    @Override
    @Transactional
    public void desaffecterEtatPropreteDeChambre(int idChambre) {
        try {
            Optional<Chambre> optionalChambre = chambreRepository.findById(idChambre);

            if (optionalChambre.isPresent()) {
                Chambre chambre = optionalChambre.get();

                // Retirer l'état de propreté de la chambre
                chambre.setEtatProprete(null);

                // Assurez-vous que la chambre est mise à jour
                chambreRepository.save(chambre);
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Chambre not found.");
            }
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Error occurred: " + e.getMessage(), e);
        }
    }
@Override
    public Map<TypeChambre, Double> getPourcentagesParType() {
        List<Chambre> chambres = chambreRepository.findAll();
        Map<TypeChambre, Double> pourcentages = new HashMap<>();

        for (TypeChambre type : TypeChambre.values()) {
            double pourcentage = calculerPourcentage(chambres, type);
            pourcentages.put(type, pourcentage);
        }

        return pourcentages;
    }

    private double calculerPourcentage(List<Chambre> chambres, TypeChambre typeChambre) {
        long nombreChambres = chambres.size();
        long nombreChambresType = chambres.stream()
                .filter(chambre -> chambre.getTypeC() == typeChambre)
                .count();

        if (nombreChambres == 0) {
            return 0.0;
        }

        return (double) nombreChambresType / nombreChambres * 100.0;
    }

}


