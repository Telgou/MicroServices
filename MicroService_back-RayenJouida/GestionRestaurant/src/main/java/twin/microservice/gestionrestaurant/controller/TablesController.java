package twin.microservice.gestionrestaurant.controller;

import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestionrestaurant.entities.Restaurant;
import twin.microservice.gestionrestaurant.entities.Tables;
import twin.microservice.gestionrestaurant.repositories.TablesRepository;
import twin.microservice.gestionrestaurant.services.RestaurantServiceImp;
import twin.microservice.gestionrestaurant.services.TablesServiceImp;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/tables")
public class TablesController {
    @Autowired
    RestaurantServiceImp iRestaurantService;

    @Autowired
    TablesServiceImp iTablesService;

    @Autowired
    TablesRepository tablesRepository;

    @PostMapping("/addTable")
    public Tables addTable(@RequestBody Tables table) {
        Tables addedTable = iTablesService.addTable(table);
        return addedTable;
    }

    @PutMapping("/updateTable/{id}")
    Tables update(@RequestBody Tables table, @PathVariable Long id) {
        table.setIdTable(id);
        return iTablesService.update(table);
    }

    @DeleteMapping("/deleteTable/{id}")
    void deleteTable(@PathVariable Long id) {
        iTablesService.delete(id);
    }

    @GetMapping("/allTables")
    List<Tables> allTables() {
        return iTablesService.getAllTables();
    }
    @GetMapping("/restaurantIdByName/{name}")
    public Long restaurantIdByName(@PathVariable String name) {
        return iRestaurantService.getRestaurantIdByName(name);
    }
    @GetMapping("/getTableById/{id}")
    Optional <Tables> getTableById(@PathVariable Long id) {
        return iTablesService.getTableById(id);

}}
