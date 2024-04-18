package com.example.microservice.repository;

import com.example.microservice.entite.Suggestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface SuggectionRepository extends JpaRepository<Suggestion,Long> {
}
