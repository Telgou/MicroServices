import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employe } from '../model/employe'; // Make sure to import the Employe model

@Injectable({
  providedIn: 'root',
})
export class EmployeService {
  private baseUrl = 'http://localhost:8099/employe';

  constructor(private httpClient: HttpClient) {}

  getAllEmployes(): Observable<Employe[]> {
    return this.httpClient.get<Employe[]>(`${this.baseUrl}/`);
  }

  getEmployeById(id: number): Observable<Employe> {
    return this.httpClient.get<Employe>(`${this.baseUrl}/${id}`);
  }

  addEmploye(employe: Employe): Observable<Employe> {
    return this.httpClient.post<Employe>(`${this.baseUrl}/`, employe);
  }

  updateEmploye(employe: Employe): Observable<Employe> {
    return this.httpClient.put<Employe>(`${this.baseUrl}/`, employe);
  }

  deleteEmploye(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
