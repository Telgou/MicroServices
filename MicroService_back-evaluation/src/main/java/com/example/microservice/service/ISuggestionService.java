package com.example.microservice.service;

import com.example.microservice.entite.Suggestion;

import java.util.List;

public interface ISuggestionService {
    static Suggestion update(Suggestion suggestion) {
        return suggestion;
    }

    Suggestion addSuggestion(Suggestion s);

    Suggestion updateSuggestion(Suggestion s);

    Suggestion removeSuggestion(Long idSuggestion);

    List<Suggestion> retrieveAllSuggestion();

    Suggestion retrieveSuggestion(Long idSuggestion);
}
