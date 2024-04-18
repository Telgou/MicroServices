package twin.microservice.gestiondesreservations.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Facture implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idFacture;
    Date DateFacturation;
    String numeroCarteCredit;
    String codeSecuriteCarte;
    long montant;
    @Column(name = "idreservation")
    private Long idreservation;

    @JsonIgnore
    @OneToOne(mappedBy = "facture", cascade = CascadeType.ALL)
    private Reservation reservation;
}

