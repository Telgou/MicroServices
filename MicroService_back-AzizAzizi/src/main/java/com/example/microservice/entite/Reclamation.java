package com.example.microservice.entite;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Date;

@Entity
@Table( name = "Reclamation")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Reclamation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idReclamation")
    private Long idReclamation; // Clé primaire
    private Date dateReclamation;
    private String statutReclamation;
    private String descreptionReclamation;
    private Long idEmployee; // Clé étrangère

}
