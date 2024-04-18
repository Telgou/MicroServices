package com.example.microservice.service;

import com.example.microservice.entite.Evaluation;
import com.example.microservice.entite.Reclamation;
import com.example.microservice.entite.Suggestion;
import com.example.microservice.repository.ReclamationRepository;
import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReclamationService implements IReclamationService{
    private static final String ACCOUNT_SID = "ACe2d8be7dc847bb66266b371c5cd07523";
    private static final String AUTH_TOKEN = "b6bb7e130f85cfcc43ca43a1f3736311";
    private static final String TWILIO_PHONE_NUMBER = "+12244125536";
    private static final String RECIPIENT_PHONE_NUMBER = "+21646356900";
    @Autowired
    private final ReclamationRepository reclamationRepository;
  /*  @Override
    public Reclamation addReclamation(Reclamation r) {
        return reclamationRepository.save(r);
    }*/
    @Override
  public Reclamation addReclamation(Reclamation r) {
      Reclamation savedReclamation = reclamationRepository.save(r);

      // Notify using Twilio within the same service method
      sendReclamationAddedNotification(savedReclamation.getIdReclamation().toString());

      return savedReclamation;
  }

    @Override
    public Reclamation updateReclamation(Reclamation updateReclamation) {
        Long id = updateReclamation.getIdReclamation();
        Optional<Reclamation> existingReclamation = reclamationRepository.findById(id);

        if (existingReclamation.isPresent()) {
            // Update the existing suggestion with the new data
            Reclamation reclamationToUpdate = existingReclamation.get();
            reclamationToUpdate.setDateReclamation(updateReclamation.getDateReclamation());
            reclamationToUpdate.setStatutReclamation(updateReclamation.getStatutReclamation());
            reclamationToUpdate.setDescreptionReclamation(updateReclamation.getDescreptionReclamation());
            reclamationToUpdate.setIdEmployee(updateReclamation.getIdEmployee());

            // Set other properties as needed

            // Save the updated suggestion
            return reclamationRepository.save(reclamationToUpdate);
        } else {
            // Handle the case where the suggestion with the given ID doesn't exist
            // You might want to throw an exception, log an error, or return a specific response
            throw new IllegalArgumentException("Suggestion with ID " + id + " not found");
        }
    }

    @Override
    public Reclamation removeReclamation(Long idReclamation) {
        reclamationRepository.deleteById(idReclamation);
        return null;
    }
    public String calculateReclamationStatus() {


        long totalReclamations = reclamationRepository.count();

        if (totalReclamations > 10) {
            return "le nombre de reclamations est superieur à 10";
        } else if (totalReclamations > 5) {
            return "le nombre de reclamations est superieur à 5 et inferieur ou egale à 10";
        } else {
            return "le nombre de reclamations est inferieur ou egale à 5";
        }
    }

    @Override
    public List<Reclamation> retrieveAllReclamation() {
        return reclamationRepository.findAll();
    }

    @Override
    public Reclamation retrieveReclamation(Long idReclamation) {
        return reclamationRepository.findById(idReclamation).get();
    }
    static {
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
    }
    public void sendReclamationAddedNotification(String reclamationId) {
        String messageContent = "Nouvelle réclamation ajoutée! ID: " + reclamationId;

        // Create and send Twilio SMS message
        Message message = Message.creator(
                new PhoneNumber(RECIPIENT_PHONE_NUMBER),
                new PhoneNumber(TWILIO_PHONE_NUMBER),
                messageContent
        ).create();
        // Print the SID of the sent message to the console
        System.out.println("Twilio Message SID: " + message.getSid());
    }

}
