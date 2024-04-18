package twin.microservice.gestionrestaurant.services;

import jakarta.transaction.Transactional;
import twin.microservice.gestionrestaurant.entities.Tables;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface ITablesService {
    Tables addTable(Tables table);

    @Transactional
    Tables update(Tables table);

    void delete(Long id);

    List<Tables> getAllTables();
    Optional <Tables> getTableById(Long idTable);
}
