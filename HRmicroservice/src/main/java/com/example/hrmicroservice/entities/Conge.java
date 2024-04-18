package com.example.hrmicroservice.entities;

import jakarta.persistence.*;
//import javax.persistence.*;


import lombok.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Conge")
public class Conge implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idConge")
    private Long idConge;
    private Date datedebut;
    private Date datefini;
    private String type;
    private Long score;
    private boolean statut;


}