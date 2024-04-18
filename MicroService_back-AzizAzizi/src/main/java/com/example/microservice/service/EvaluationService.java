package com.example.microservice.service;

import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Suggestion;
import com.example.microservice.repository.EvaluationRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class EvaluationService implements  IEvaluationService{
    @Autowired
    EvaluationRepository evaluationRepository;



    @Override
    public Evaluation addEvaluation(Evaluation e) {
        return evaluationRepository.save(e);
    }


    @Override
    public Evaluation updateEvaluation(Evaluation updatedEvaluation) {
        Long id = updatedEvaluation.getIdEvaluation();
        Optional<Evaluation> existingEvaluation = evaluationRepository.findById(id);

        if (existingEvaluation.isPresent()) {
            // Update the existing suggestion with the new data
            Evaluation evaluationToUpdate = existingEvaluation.get();
            evaluationToUpdate.setDateEvaluation(updatedEvaluation.getDateEvaluation());
            evaluationToUpdate.setEvaluateur(updatedEvaluation.getEvaluateur());
            evaluationToUpdate.setObjectifEvaluation(updatedEvaluation.getObjectifEvaluation());

            // Set other properties as needed

            // Save the updated suggestion
            return evaluationRepository.save(evaluationToUpdate);
        } else {
            // Handle the case where the suggestion with the given ID doesn't exist
            // You might want to throw an exception, log an error, or return a specific response
            throw new IllegalArgumentException("Suggestion with ID " + id + " not found");
        }
    }

    @Override
    public Evaluation removeEvaluation(Long idEvaluation) {
        evaluationRepository.deleteById(idEvaluation);
        return null;
    }

    @Override
    public List<Evaluation> retrieveAllEvaluation() {
        return evaluationRepository.findAll();
    }

    @Override
    public Evaluation retrieveEvaluation(Long idEvaluation) {
        return evaluationRepository.findById(idEvaluation).get();
    }


}
