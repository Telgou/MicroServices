package twin.microservice.gestionrestaurant.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestionrestaurant.entities.Restaurant;
import twin.microservice.gestionrestaurant.repositories.RestaurantRepository;
import twin.microservice.gestionrestaurant.services.RestaurantServiceImp;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/restaurant")
public class RestaurantController {
    @Autowired
    RestaurantServiceImp iRestaurantService;
    @Autowired
    RestaurantRepository restaurantRepository;
    @PostMapping("/addRestaurant")
    public Restaurant addRestaurant(@RequestBody Restaurant r) {
        Restaurant restaurant = iRestaurantService.addRestaurant(r);
        return restaurant;
    }
    @PutMapping("/updateRestaurant/{id}")
    Restaurant update(@RequestBody Restaurant restaurant, @PathVariable Long id)
    {
        restaurant.setIdRestaurant(id);
        return iRestaurantService.update(restaurant);
    }
    @DeleteMapping("/deleteRes/{id}")
    void deleteRes(@PathVariable Long id)
    {
        iRestaurantService.delete(id);
    }
    @GetMapping("/allRestaurant")
    List<Restaurant> allRestaurant(){
        return iRestaurantService.getAllRestaurant();
    }
    @GetMapping("/restaurantById/{id}")
    public Restaurant restaurantById(@PathVariable Long id) {
        return iRestaurantService.getRestaurantById(id);
    }
    @GetMapping("/restaurantIdByName/{name}")
    public Long restaurantIdByName(@PathVariable String name) {
        return iRestaurantService.getRestaurantIdByName(name);
    }





}
