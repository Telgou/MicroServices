package twin.microservice.gestionrestaurant.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.time.Duration;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ServiceEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idService;
    private String menuS;
    private String serveurS;
    private Long numCh;
    private String specialreq;

    @ManyToOne
    @JoinColumn(name = "idRestaurant") // This should be the name of the foreign key column in the ServiceEntity table
    private Restaurant restaurant;
}
