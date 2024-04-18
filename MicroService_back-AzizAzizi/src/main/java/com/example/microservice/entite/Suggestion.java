package com.example.microservice.entite;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table( name = "Suggestion")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Suggestion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idSuggestion")
    private Long idSuggestion; // Clé primaire
    private Date dateSuggestion;
    private String descriptionSuggestion;
    private String statusSuggestion;
    private String Responsable;
}
