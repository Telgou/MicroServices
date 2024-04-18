package com.example.microserviceprojectchambre.service;

import com.example.microserviceprojectchambre.entite.EtatProp;
import com.example.microserviceprojectchambre.repository.EtatPropRepository;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
@Slf4j
public class EtatService implements IEtatPropService{
    @Autowired
    private EtatPropRepository etatPropRepository;

    @Override
    public EtatProp AddEtatProp(EtatProp etatProp) {

        try {
            // Ajouter des logs
            log.info("Avant la sauvegarde : {}", etatProp);

            EtatProp savedEtatProp = etatPropRepository.save(etatProp);

            // Ajouter des logs après la sauvegarde
            log.info("Après la sauvegarde : {}", savedEtatProp);

            return savedEtatProp;
        } catch (Exception e) {
            // Ajouter des logs pour l'exception
            log.error("Erreur lors de la sauvegarde de l'EtatProp : {}", e.getMessage());
            throw e;
        }
    }

    @Override
    public List<EtatProp> getAllEtatsProp() {
        return etatPropRepository.findAll();
    }

    @Override
    public EtatProp getEtatPropById(int idEtat) {
        Optional<EtatProp> optionalEtatProp = etatPropRepository.findById(idEtat);
        return optionalEtatProp.orElse(null);
    }

    @Override
    public EtatProp updateEtatProp(EtatProp nouvelEtatProp) {
        if (etatPropRepository.existsById(Math.toIntExact(nouvelEtatProp.getIdEtat()))) {
            return etatPropRepository.save(nouvelEtatProp);
        }
        return null; // Ou lancez une exception si nécessaire
    }

    @Override
    public void deleteEtatProp(int idEtat) {
        etatPropRepository.deleteById(Math.toIntExact(idEtat));
    }
}
