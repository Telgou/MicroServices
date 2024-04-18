import { Reservations } from './../model/Reservations';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, switchMap, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ReservationsService {
  private url: String = 'http://localhost:8099/reservation';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getAllReservations(): Observable<any> {
    return this.http.get(this.url + '/allReservation');
  }

  addReservation(reservation: Reservations): Observable<any> {
    return this.http.post(this.url + '/addReservation', reservation);  }

  deleteReservation(reser:Reservations):Observable<Reservations>{
    return this.http.delete<Reservations>(`${this.url}/deleteReservation/${reser.idreservation}` );
  }
 
  
  
  
  updateReservation(reservation: Reservations): Observable<Reservations> {
   return this.http.put<Reservations>(this.url+'/updateReservation', reservation);
  }
  // reservations.service.ts
getReservationById(id: any): Observable<Reservations> {
  return this.http.get<Reservations>(`${this.url}/Reservation/${id}`);
}

updateReservationMontant(reservationId: number, remisePourcentage: number): Observable<any> {
  const url = `${this.url}/reservations/${reservationId}`;

  // Récupérer la réservation actuelle pour obtenir le montant existant
  return this.http.get<any>(url).pipe(
    switchMap(currentReservation => {
      const currentMontant = currentReservation.montant;

      // Calculer le montant mis à jour en appliquant la remise en pourcentage
      const remiseDecimal = remisePourcentage / 100;
      const montantRemise = currentMontant * (1 - remiseDecimal);

      // Mettre à jour la réservation avec le nouveau montant
      const body = { montant: montantRemise };
      return this.http.put<any>(url, body);
    })
  );
}



  


}
