package com.example.microservice.controller;


import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Reclamation;
import com.example.microservice.entite.Suggestion;
import com.example.microservice.service.IReclamationService;
import com.example.microservice.service.ISuggestionService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/Suggestion")
public class SuggestionController {
    ISuggestionService suggestionService;
    @GetMapping("/allSuggestion/{id}")
    Suggestion suggestionById(@PathVariable Long id)
    {
        return suggestionService.retrieveSuggestion(id);
    }
    @GetMapping("/restieve-all-suggestions")
    public List<Suggestion> getsuggestion(){
        List<Suggestion> listsuggestion = suggestionService.retrieveAllSuggestion();
        return listsuggestion;
    }
    @PostMapping("/add-Suggestion")
    public Suggestion addSuggestion(@RequestBody Suggestion s) {
        Suggestion suggestion = suggestionService.addSuggestion(s);

        return suggestion;
    }
    @PutMapping("/update-Suggestion/{id}")
  /*  public Suggestion updateSuggestion(Suggestion updatedSuggestion) {
        // Delegate the update operation to the service
        return suggestionService.updateSuggestion(updatedSuggestion);
    }*/
   Suggestion updateSuggestion(@RequestBody Suggestion suggestion, @PathVariable Long id)
    {
        suggestion.setIdSuggestion(id);
        Suggestion suggestion1 =suggestionService.updateSuggestion(suggestion);
        return suggestion1/*ISuggestionService.update(suggestion)*/;
    }
    @DeleteMapping("/remove-Suggestion/{Suggestion-id}")
    public void removeSuggestion (@PathVariable ("Suggestion-id") Long idSuggestion) {
        Suggestion suggestion = suggestionService.removeSuggestion(idSuggestion);
    }
}
