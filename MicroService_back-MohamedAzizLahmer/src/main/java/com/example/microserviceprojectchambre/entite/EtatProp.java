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
public class EtatProp implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int idEtat;

    private String etat;

    @Temporal(TemporalType.DATE)
    private Date dateNettoyage;

    private String personnel;

    @OneToOne
    @JoinColumn(name = "chambre_id")
    @JsonIgnore
    private Chambre chambre;
}
