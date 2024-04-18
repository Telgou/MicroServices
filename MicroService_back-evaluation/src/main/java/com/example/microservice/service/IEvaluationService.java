package com.example.microservice.service;

import com.example.microservice.entite.Evaluation;
import com.example.microservice.repository.EvaluationRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public interface IEvaluationService {

    static Evaluation update(Evaluation evaluation) {
        return evaluation;
    }

    Evaluation addEvaluation(Evaluation e);

    Evaluation updateEvaluation(Evaluation e);

    Evaluation removeEvaluation(Long idEvaluation);

    List<Evaluation> retrieveAllEvaluation();

    Evaluation retrieveEvaluation(Long idEvaluation);
}
