import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EtatProp } from '../model/EtatProp';

@Injectable({
  providedIn: 'root'
})
export class EtatService {
  private baseUrl = 'http://localhost:8099/Etat';  // Mettez à jour l'URL avec le bon port et contexte de votre serveur
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), // Correction ici
  };
  constructor(private http: HttpClient) { }

  addEtatProp(etatProp: EtatProp): Observable<EtatProp> {
    return this.http.post<EtatProp>(`${this.baseUrl}/addEtatProp`, etatProp);
  }

  getAllEtatsProp(): Observable<EtatProp[]> {
    return this.http.get<EtatProp[]>(`${this.baseUrl}/getAllEtatsProp`);
  }

  getEtatPropById(idEtat: number): Observable<EtatProp> {
    return this.http.get<EtatProp>(`${this.baseUrl}/getEtatPropById/${idEtat}`);
  }

  updateEtatProp(nouvelEtatProp: EtatProp): Observable<EtatProp> {
    return this.http.put<EtatProp>(`${this.baseUrl}/updateEtatProp`, nouvelEtatProp);
  }

  deleteEtatProp(idEtat: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/deleteEtatProp/${idEtat}`);
  }


}
