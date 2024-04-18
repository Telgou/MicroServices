package twin.microservice.gestionrestaurant.services;

import jakarta.transaction.Transactional;
import twin.microservice.gestionrestaurant.entities.ServiceEntity;

import java.util.List;

public interface IServiceEntityService {
    public ServiceEntity addService(ServiceEntity service);

    @Transactional
    ServiceEntity update(ServiceEntity serviceEntity);

    void delete(Long id);

    List<ServiceEntity> getAllService();
    public String generateServiceReportPdf(Long idService);
}
