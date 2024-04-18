package twin.microservice.gestionrestaurant.entities;

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
public class Tables implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idTable;
    private Long numTable;
    private Integer nbplaceT;
    private String etatT;
    private String cuisine;
    private Date reservation;


    @JsonIgnore

    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    public void setRestaurantId(Long restaurantId) {
        if (this.restaurant == null) {
            this.restaurant = new Restaurant();
        }
        this.restaurant.setIdRestaurant(restaurantId);
    }

}
