package com.example.microserviceprojectchambre.repository;

import com.example.microserviceprojectchambre.entite.EtatProp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EtatPropRepository extends JpaRepository<EtatProp,Integer> {

}
