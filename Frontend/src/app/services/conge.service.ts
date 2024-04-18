import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conge } from '../model/Conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {


  private baseUrl: string = 'http://localhost:8099'; // Remplacez par l'URL de votre backend
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), // Correction ici
  };
  constructor(private HttpClient: HttpClient) { }

  getAllConges(): Observable<Conge[]> {
    return this.HttpClient.get<Conge[]>(`${this.baseUrl}/conge/`);
  }

  getCongeById(id: number): Observable<Conge> {
    return this.HttpClient.get<Conge>(`${this.baseUrl}/conge/${id}`);
  }

  addConge(conge: Conge): Observable<Conge> {
    return this.HttpClient.post<Conge>(`${this.baseUrl}/conge/`, conge);
  }

  updateConge(conge: Conge): Observable<Conge> {
    return this.HttpClient.put<Conge>(`${this.baseUrl}/conge/update`, conge);
  }

  deleteConge(id: number): Observable<void> {
    return this.HttpClient.delete<void>(`${this.baseUrl}/conge/${id}`);
  }

  addConges(conges: Conge[]): Observable<Conge[]> {
    return this.HttpClient.post<Conge[]>(`${this.baseUrl}/conge/addconges`, conges);
  }
}
