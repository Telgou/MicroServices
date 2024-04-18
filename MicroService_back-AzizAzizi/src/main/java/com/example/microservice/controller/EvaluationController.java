package com.example.microservice.controller;

import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Reclamation;
import com.example.microservice.service.IEvaluationService;
import com.example.microservice.service.IReclamationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Evaluation")
public class EvaluationController {
    IEvaluationService evaluationService;
    @GetMapping("/allEvaluation/{id}")
    Evaluation evaluationById(@PathVariable Long id)
    {
        return evaluationService.retrieveEvaluation(id);
    }
    @GetMapping("/restieve-all-evaluations")
    public List<Evaluation> getevaluation(){
        List<Evaluation> listevaluation = evaluationService.retrieveAllEvaluation();
        return listevaluation;
    }
    @PostMapping("/add-Evaluation")
    public Evaluation addEvaluation(@RequestBody Evaluation e) {
        Evaluation evaluation = evaluationService.addEvaluation(e);

        return evaluation;
    }
    @PutMapping("/update-Evaluation/{id}")
    Evaluation updateEvaluation(@RequestBody Evaluation evaluation, @PathVariable Long id)
    {
        evaluation.setIdEvaluation(id);
        Evaluation evaluation1 =evaluationService.updateEvaluation(evaluation);
        return evaluation1/*ISuggestionService.update(suggestion)*/;
    }
    @DeleteMapping("/remove-Evaluation/{Evaluation-id}")
    public void removeEvaluation (@PathVariable ("Evaluation-id") Long idEvaluation) {
        Evaluation evaluation = evaluationService.removeEvaluation(idEvaluation);
    }
}
