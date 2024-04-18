package twin.microservice.gestionrestaurant.services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import twin.microservice.gestionrestaurant.entities.Restaurant;
import twin.microservice.gestionrestaurant.entities.Tables;
import twin.microservice.gestionrestaurant.repositories.TablesRepository;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class TablesServiceImp implements ITablesService {

    @Autowired
    TablesRepository tablesRepository;
    RestaurantServiceImp restaurantService;
    @Override
    public Tables addTable(Tables table) {
        // Set the restaurant based on the chosen restaurant name
        if (table.getRestaurant() != null && table.getRestaurant().getNomR() != null) {
            switch (table.getRestaurant().getNomR()) {
                case "Gloovo":
                    table.setRestaurant(restaurantService.getRestaurantById(1L)); // Replace with actual method
                    break;
                case "FoodandAll":
                    table.setRestaurant(restaurantService.getRestaurantById(2L)); // Replace with actual method
                    break;
                case "PizzaOnly":
                    table.setRestaurant(restaurantService.getRestaurantById(3L)); // Replace with actual method
                    break;
                case "MrCozy":
                    table.setRestaurant(restaurantService.getRestaurantById(4L)); // Replace with actual method
                    break;
                default:
                    // Handle other cases if needed
                    break;
            }
        }

        return tablesRepository.save(table);
    }

    @Override
    @Transactional
    public Tables update(Tables table) {
        Long id = table.getIdTable();
        System.out.println("Attempting to update table with ID: " + id);

        Tables existingTable = tablesRepository.findById(id)
                .orElseThrow(() -> {
                    System.out.println("EntityNotFoundException thrown!");
                    return new EntityNotFoundException("No Table with id " + id + " was found!");
                });

        existingTable.setNumTable(table.getNumTable());
        existingTable.setNbplaceT(table.getNbplaceT());
        existingTable.setEtatT(table.getEtatT());

        tablesRepository.save(existingTable);

        return existingTable;
    }

    @Override
    public void delete(Long id) {
        tablesRepository.deleteById(id);
    }

    @Override
    public List<Tables> getAllTables() {
        return tablesRepository.findAll();
    }
    public Optional <Tables> getTableById(Long idTable) {
        return tablesRepository.findById(idTable);
    }

}
