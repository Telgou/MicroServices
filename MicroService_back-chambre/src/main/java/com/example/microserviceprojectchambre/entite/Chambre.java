package com.example.microserviceprojectchambre.entite;

import com.example.microserviceprojectchambre.entite.EtatProp;
import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import com.example.microserviceprojectchambre.entite.TypeChambre;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Chambre implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "idChambre")
    private int idChambre;

    private int numChambre;

    @Enumerated(EnumType.STRING)
    private TypeChambre typeC;

    private int etage;


    private double tarif;

    @OneToOne(mappedBy = "chambre", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private EtatProp etatProprete;

    @OneToMany(mappedBy = "chambre", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<HistoriqueSejour> historiquesSejour;
}
