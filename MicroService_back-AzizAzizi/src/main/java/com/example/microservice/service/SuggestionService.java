package com.example.microservice.service;

import com.example.microservice.entite.Suggestion;
import com.example.microservice.repository.SuggectionRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class SuggestionService implements ISuggestionService{
    @Autowired
    SuggectionRepository suggectionRepository;

    @Override
    public Suggestion addSuggestion(Suggestion s) {
        return suggectionRepository.save(s);
    }
    @Override
    public Suggestion updateSuggestion(Suggestion updatedSuggestion) {
        Long id = updatedSuggestion.getIdSuggestion();
        Optional<Suggestion> existingSuggestion = suggectionRepository.findById(id);

        if (existingSuggestion.isPresent()) {
            // Update the existing suggestion with the new data
            Suggestion suggestionToUpdate = existingSuggestion.get();
            suggestionToUpdate.setDateSuggestion(updatedSuggestion.getDateSuggestion());
            suggestionToUpdate.setDescriptionSuggestion(updatedSuggestion.getDescriptionSuggestion());
            suggestionToUpdate.setStatusSuggestion(updatedSuggestion.getStatusSuggestion());
            suggestionToUpdate.setResponsable(updatedSuggestion.getResponsable());

            // Set other properties as needed

            // Save the updated suggestion
            return suggectionRepository.save(suggestionToUpdate);
        } else {
            // Handle the case where the suggestion with the given ID doesn't exist
            // You might want to throw an exception, log an error, or return a specific response
            throw new IllegalArgumentException("Suggestion with ID " + id + " not found");
        }
    }
   /* @Override
    public Suggestion updateSuggestion(Suggestion s) {
        return suggectionRepository.save(s);
    }*/

    @Override
    public Suggestion removeSuggestion(Long idSuggestion) {
        suggectionRepository.deleteById(idSuggestion);
        return null;
    }

    @Override
    public List<Suggestion> retrieveAllSuggestion() {
        return suggectionRepository.findAll();
    }

    @Override
    public Suggestion retrieveSuggestion(Long idSuggestion) {
        return suggectionRepository.findById(idSuggestion).get();
    }
}
