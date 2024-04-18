package twin.microservice.gestionrestaurant.controller;

import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import twin.microservice.gestionrestaurant.entities.Restaurant;
import twin.microservice.gestionrestaurant.entities.ServiceEntity;
import twin.microservice.gestionrestaurant.repositories.RestaurantRepository;
import twin.microservice.gestionrestaurant.repositories.ServiceEntityRepository;
import twin.microservice.gestionrestaurant.services.RestaurantServiceImp;
import twin.microservice.gestionrestaurant.services.ServiceEntityServiceImp;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/serviceEntity")
public class ServiceEntityController {
    @Autowired
    ServiceEntityServiceImp iServiceEntityService;
    @Autowired
    ServiceEntityRepository serviceEntityRepository;
    @PostMapping("/addService")
    public ServiceEntity addService(@RequestBody ServiceEntity s) {
        ServiceEntity serviceEntity = iServiceEntityService.addService(s);
        return serviceEntity;
    }
    @PutMapping("/updateService/{id}")
    ServiceEntity update(@RequestBody ServiceEntity serviceEntity, @PathVariable Long id) {
        serviceEntity.setIdService(id);
        return iServiceEntityService.update(serviceEntity);
    }
    @DeleteMapping("/deleteService/{id}")
    void deleteService(@PathVariable Long id) {
        iServiceEntityService.delete(id);
    }
    @GetMapping("/getAllServices")
    List<ServiceEntity> getAllServices() {
        return iServiceEntityService.getAllService();
    }
    @GetMapping("/generateServiceReportPdf/{idService}")
    public String generateServiceReportPdf(@PathVariable("idService") Long idService) {
        return iServiceEntityService.generateServiceReportPdf(idService);
    }






}
