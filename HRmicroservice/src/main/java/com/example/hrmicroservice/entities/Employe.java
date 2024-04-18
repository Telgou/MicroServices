package com.example.hrmicroservice.entities;

import lombok.*;

import jakarta.persistence.*;
//import javax.persistence.*;
import java.io.Serializable;


@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Employe")
public class Employe implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idEmploye")
    private Long idEmp;
    private String nomEmp;
    private String prenomEmp;
    private Long telEmp;
    private String posteEmp;


}