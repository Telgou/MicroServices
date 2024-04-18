package com.example.hrmicroservice.repositories;

import com.example.hrmicroservice.entities.Conge;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CongeRepository extends JpaRepository<Conge,Long> {

}
