package twin.microservice.gestiondesreservations.services;

import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import twin.microservice.gestiondesreservations.entities.Reservation;
import twin.microservice.gestiondesreservations.entities.Tarif;
import twin.microservice.gestiondesreservations.repositories.TarifRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class TarifServiceImp implements ITarifService{

@Autowired
    TarifRepository tarifRepository;
    @Override
    public Tarif addTarif(Tarif tarif) {
        return tarifRepository.save(tarif);
    }

    @Override
    public List<Tarif> getTarif() {
        return tarifRepository.findAll();
    }

    @Override
    public Tarif update(Tarif tarif) {
        {
            Tarif tarif1 = tarifRepository.findById(tarif.getIdTarif()).orElseThrow(() -> new EntityNotFoundException("No tarif with id " + tarif.getIdTarif() + " was found!"));
            if (tarif1!=null){
                tarifRepository.save(tarif);}
            return tarif1;
        }    }

    @Override
    public void delete(Long id) {
    tarifRepository.deleteById(id);
    }

    @Override
    public Optional<Tarif> getTarifById(Long id) {
        return tarifRepository.findById(id);
    }


    public Tarif getTarifByCodePromo(String codepromo) {
        return tarifRepository.findByCodepromo(codepromo);
    }
}
