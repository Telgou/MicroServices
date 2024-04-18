package twin.microservice.gestionrestaurant.services;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import net.sf.jasperreports.engine.*;
import net.sf.jasperreports.engine.data.JRBeanCollectionDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Service;
import twin.microservice.gestionrestaurant.repositories.ServiceEntityRepository;
import twin.microservice.gestionrestaurant.entities.ServiceEntity;
import org.springframework.core.env.Environment;

import java.sql.Connection;
import java.sql.DriverManager;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@AllArgsConstructor
@Service
public class ServiceEntityServiceImp implements IServiceEntityService {
    @Autowired
    private Environment environment;

    @Autowired
    ServiceEntityRepository serviceRepository;
    @Override
    public ServiceEntity addService(ServiceEntity service) {

        return serviceRepository.save(service);
    }
    @Override
    @Transactional
    public ServiceEntity update(ServiceEntity serviceEntity) {
        Long id = serviceEntity.getIdService();
        System.out.println("Attempting to update service with ID: " + id);

        ServiceEntity existingService = serviceRepository.findById(id)
                .orElseThrow(() -> {
                    System.out.println("EntityNotFoundException thrown!");
                    return new EntityNotFoundException("No Service with id " + id + " was found!");
                });

        existingService.setMenuS(serviceEntity.getMenuS());
        existingService.setServeurS(serviceEntity.getServeurS());
        existingService.setNumCh(serviceEntity.getNumCh());
        existingService.setSpecialreq(serviceEntity.getSpecialreq());

        serviceRepository.save(existingService);

        return existingService;
    }
    @Override
    public void delete(Long id) {
        serviceRepository.deleteById(id);
    }
    @Override
    public List<ServiceEntity> getAllService() {
        return serviceRepository.findAll();
    }
    @Override
    public String generateServiceReportPdf(Long idService) {
        try {
            // Get your data source
            Connection conn = DriverManager.getConnection(
                    environment.getProperty("spring.datasource.url"),
                    environment.getProperty("spring.datasource.username"),
                    environment.getProperty("spring.datasource.password")
            );

            String reportPath = "C:\\service"; // Adjust the path to save the report

            // Compile the Jasper report from .jrxml to .japser
            JasperReport jasperReport = JasperCompileManager.compileReport(
                    new ClassPathResource("carte_service.jrxml.xml")
                            .getInputStream());

            // Fetch the ServiceEntity from the database
            ServiceEntity serviceEntity = serviceRepository.findById(idService)
                    .orElse(null);

            if (serviceEntity == null) {
                return "ServiceEntity not found with id: " + idService;
            }

            // Prepare data for the report
            JRBeanCollectionDataSource dataSource = new JRBeanCollectionDataSource(
                    List.of(serviceEntity));

            // Add parameters
            Map<String, Object> parameters = new HashMap<>();
            parameters.put("id_service", idService);

            // Fill the report
            JasperPrint jasperPrint = JasperFillManager.fillReport(jasperReport, parameters, conn);

            // Export the report to a PDF file
            JasperExportManager.exportReportToPdfFile(jasperPrint, reportPath + "\\service_report.pdf");

            return "ServiceEntity report successfully generated @path= " + reportPath;
        } catch (Exception e) {
            e.printStackTrace();
            return "Error--> check the console log";
        }
    }



}
