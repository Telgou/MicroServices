import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarif } from '../model/Tarif';

@Injectable({
  providedIn: 'root'
})
export class TarifService {
  private apiUrl = 'http://localhost:8099/tarif'; // Replace with your actual API base URL

  constructor(private http: HttpClient) { }

  addTarif(tarif: Tarif): Observable<Tarif> {
    return this.http.post<Tarif>(`${this.apiUrl}/addTarif`, tarif);
  }

  updateTarif(tarif: Tarif): Observable<Tarif> {
    return this.http.put<Tarif>(`${this.apiUrl}/updateTarif`, tarif);
  }

  getAllTarif(): Observable<Tarif[]> {
    return this.http.get<Tarif[]>(`${this.apiUrl}/allTarif`);
  }

  getTarifById(id: number): Observable<Tarif> {
    return this.http.get<Tarif>(`${this.apiUrl}/Tarif/${id}`);
  }

  deleteTarif(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/deleteTarif/${id}`);
  }
  getTarifByCodePromo(codepromo: string): Observable<Tarif> {
    const url = `${this.apiUrl}/codepromo?codepromo=${codepromo}`;
    return this.http.get<Tarif>(url);
  }
  
  
}
