package com.example.microserviceprojectchambre.entite;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class HistoriqueSejour implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idHistSejour;

    @Temporal(TemporalType.DATE)
    private Date dateArrivee;

    @Temporal(TemporalType.DATE)
    private Date dateDepart;

    private double cout;

    @Enumerated(EnumType.STRING)
    private Status statutSejour;

    @ManyToOne
    @JoinColumn(name = "chambre_id")
    @JsonIgnore
    private Chambre chambre;
}
