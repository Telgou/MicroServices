package twin.microservice.gestiondesreservations.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long idreservation;
    long idClient;
    long duree;
    EnumStatut statut = EnumStatut.ENATTENTE; // Set default value to ENATTENTE
    long montant;

    @JsonIgnore
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "idFacture")
    Facture facture;

    public void setFacture(Facture facture) {
        this.facture = facture;

        if (facture != null) {
            this.statut = EnumStatut.PAYEE;
        }
    }
}
