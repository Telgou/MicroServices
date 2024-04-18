package com.example.microserviceprojectchambre.repository;

import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HistoriqueRepository extends JpaRepository<HistoriqueSejour,Integer> {
}
