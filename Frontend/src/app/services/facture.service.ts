import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Facture } from './../model/Facture';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class FactureService {
  
  private url: string = 'http://localhost:8099/facture';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  factureService: any;

  constructor(private http: HttpClient, private router: Router) {}

  getAllFactures(): Observable<any> {
    return this.http.get(this.url + '/allFacture');
  }

  payerFacture(idreservation: number) {
    // Navigate to the 'add-facture' route with the 'idreservation' parameter
    this.router.navigate(['/add-facture', idreservation]);
  }

  addFacture(facture: Facture, idreservation: number): Observable<any> {
    const url = `${this.url}/addFacture/${idreservation}`;
    return this.http.post(url, facture, this.httpOptions);
  }
  

  deleteFacture(facture: Facture): Observable<Facture> {
    return this.http.delete<Facture>(`${this.url}/deleteFacture/${facture.idFacture}`);
  }

  getFactureById(id: any): Observable<any> {
    return this.http.get(`${this.url}/Facture/${id}`);
  }

  updateFacture(facture: Facture): Observable<Facture> {
    return this.http.put<Facture>(`${this.url}/updateFacture`, facture);
  }
}
