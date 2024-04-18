import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reclamations } from '../model/reclamation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class reclamationService {
  private url: String = 'http://localhost:8099/Reclamation/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http:HttpClient) { }
  getreclamation():Observable<any> {
    return this.http.get(`${this.url}restieve-all-reclamations`);
  }
  reclamationById(reclamation:reclamations) {
    return this.http.get(this.url+"remove-Reclamation/"+reclamation.idReclamation);

  }
  addReclamation(reclamation: reclamations): Observable<reclamations> {
    return this.http.post<reclamations>(`${this.url}add-Reclamation`, reclamation);
  }
  removeReclamation(reclamation: reclamations) {
    return this.http.delete(this.url+"remove-Reclamation/"+reclamation.idReclamation);
  }
  
  updateReclamation(reclamation: reclamations, id: number): Observable<reclamations> {
    const updateUrl = `${this.url}update-Reclamation/${id}`;
    return this.http.put<reclamations>(updateUrl, reclamation);
  }
  getReclamationStatus(): Observable<string> {
    return this.http.get(`${this.url}stat`, { responseType: 'text' });
  }
 
}
