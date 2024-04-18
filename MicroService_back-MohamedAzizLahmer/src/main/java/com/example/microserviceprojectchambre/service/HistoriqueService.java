package com.example.microserviceprojectchambre.service;
import com.example.microserviceprojectchambre.entite.Chambre;

import com.example.microserviceprojectchambre.entite.HistoriqueSejour;
import com.example.microserviceprojectchambre.repository.HistoriqueRepository;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.imageio.ImageIO;
import java.awt.image.BufferedImage;
import java.io.OutputStream;
import java.util.List;
import java.util.Optional;

@Service
public class HistoriqueService implements IHistoriqueService {

    @Autowired
    HistoriqueRepository historiqueRepository;

    @Override
    public HistoriqueSejour addHistoriqueSejour(HistoriqueSejour historiqueSejour) {
        // Implémentation pour ajouter un historique de séjour
        return historiqueRepository.save(historiqueSejour);
    }

    @Override
    public List<HistoriqueSejour> getAllHistoriquesSejour() {
        // Implémentation pour récupérer tous les historiques de séjour
        return historiqueRepository.findAll();
    }

    @Override
    public HistoriqueSejour getHistoriqueSejourById(int idHistSejour) {
        // Implémentation pour récupérer un historique de séjour par son ID
        return historiqueRepository.findById(idHistSejour).orElse(null);
    }

    @Override
    public HistoriqueSejour updateHistoriqueSejour(HistoriqueSejour historiqueSejour) {
        // Implémentation pour mettre à jour un historique de séjour
        if (historiqueRepository.existsById(historiqueSejour.getIdHistSejour())) {
            return historiqueRepository.save(historiqueSejour);
        }
        return null; // Ou lancez une exception selon votre logique
    }

    @Override
    public void deleteHistoriqueSejour(int idHistSejour) {
        // Implémentation pour supprimer un historique de séjour par son ID
        historiqueRepository.deleteById(idHistSejour);
    }
    @Override
    public Chambre getChambreByHistoriqueSejourId(int idHistSejour) {
        Optional<HistoriqueSejour> optionalHistoriqueSejour = historiqueRepository.findById(idHistSejour);

        if (optionalHistoriqueSejour.isPresent()) {
            HistoriqueSejour historiqueSejour = optionalHistoriqueSejour.get();
            return historiqueSejour.getChambre();
        }

        // Retournez null ou lancez une exception selon votre logique
        return null;
    }
    @Override
    public void generateQRCode(int idHistorique, HttpServletResponse response) {
        try {
            HistoriqueSejour sejour = historiqueRepository.findById(idHistorique).orElse(null);
            if (sejour != null) {
                BufferedImage bufferedImage = generateQRCodeImage(sejour);

                // Set the content type and headers
                response.setContentType("image/jpeg");
                response.setHeader("Content-Disposition", "inline; filename=qrCode.jpg");

                // Write the image to the response's output stream
                OutputStream outputStream = response.getOutputStream();
                ImageIO.write(bufferedImage, "jpg", outputStream);
                outputStream.close();
            } else {
                response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            }
        } catch (Exception e) {
            e.printStackTrace();
            // Handle exceptions appropriately, e.g., return an error response
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
    }

    public static BufferedImage generateQRCodeImage(HistoriqueSejour sejour) throws Exception {
        if (sejour != null) {
            String qrContent = String.format("Numero Chambre: %d | Type: %s | Date Arrivee: %s | Date Depart: %s ",
                    sejour.getChambre().getIdChambre(),
                    sejour.getChambre().getTypeC(),
                    sejour.getDateArrivee(),
                    sejour.getDateDepart());

            QRCodeWriter barcodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = barcodeWriter.encode(qrContent, BarcodeFormat.QR_CODE, 200, 200);

            return MatrixToImageWriter.toBufferedImage(bitMatrix);
        }
        return null;
    }
}