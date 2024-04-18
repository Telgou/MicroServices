package com.example.microservice.entite;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table( name = "Evaluation")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Evaluation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idEvaluation")
    private Long idEvaluation;
    private Date dateEvaluation;
    private String evaluateur;
    private String objectifEvaluation;
}
