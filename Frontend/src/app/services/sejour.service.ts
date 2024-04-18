import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sejour } from './../model/Sejour';
import { Chambre } from '../model/Chambre';
@Injectable({
  providedIn: 'root'
})
export class SejourService {

  private baseUrl = 'http://localhost:8099/historique'; // Assurez-vous de remplacer l'URL par celle de votre backend

  constructor(private http: HttpClient) { }

  addHistoriqueSejour(historiqueSejour: Sejour): Observable<Sejour> {
    return this.http.post<Sejour>(`${this.baseUrl}/add`, historiqueSejour);
  }

  getAllHistoriquesSejour(): Observable<Sejour[]> {
    return this.http.get<Sejour[]>(`${this.baseUrl}/all`);
  }

  getHistoriqueSejourById(id: number): Observable<Sejour> {
    return this.http.get<Sejour>(`${this.baseUrl}/${id}`);
  }


  updateHistoriqueSejour(historiqueSejour: Sejour): Observable<Sejour> {
    return this.http.put<Sejour>(`${this.baseUrl}/update`, historiqueSejour);
  }

  deleteHistoriqueSejour(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }
  getHistoriqueSejourChambreById(id: number): Observable<Chambre> {
    return this.http.get<Chambre>(`${this.baseUrl}/chambreSejour/${id}`);
  }

  // Mettez à jour le type de retour de la méthode generateQRCode
  generateQRCode(idHistorique: number): Observable<Blob> {
    const url = `${this.baseUrl}/historique/qr/${idHistorique}`;
    const options = { responseType: 'blob' as 'json' };

    return this.http.get<Blob>(url, options);
  }



}
