import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chambre } from '../model/Chambre';
import { Observable } from 'rxjs';
import { TypeChambre } from '../model/typeChambre';

@Injectable({
  providedIn: 'root'
})
export class ChambreService {
  private url: string = 'http://localhost:8099/Chambre'; // Correction ici
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }), // Correction ici
  };

  constructor(private http: HttpClient) { }

  getAllChambre(): Observable<any> { // Correction ici
    return this.http.get(this.url + '/getall');
  }

  addChambre(chambre: any): Observable<any> { // Correction ici
    return this.http.post(this.url + '/addChambre', chambre, this.httpOptions); // Correction ici
  }

  deleteChambre(ch: Chambre): Observable<Chambre> {
    return this.http.delete<Chambre>(this.url + '/deleteChambre/' + ch.idChambre); // Correction ici
  }

  getChambreById(id: any): Observable<any> { // Correction ici
    return this.http.get(this.url + '/getById/' + id); // Correction ici
  }

  updateChambre(chambre: Chambre): Observable<Chambre> {
    const updateChambreUrl = `${this.url}/updateChambre`;
    return this.http.put<Chambre>(updateChambreUrl, chambre);
  }


  affecterHistoriqueSejourAChambre(idChambre: number, idHistorique: number): Observable<void> {
    const url = `${this.url}/affecter/${idChambre}/${idHistorique}`;
    return this.http.put<void>(url, {});
  }

  affecterEtatPropreteAChambre(idChambre: number, idEtatProp: number): Observable<void> {
    const url = `${this.url}/affecterEtat/${idChambre}/${idEtatProp}`;
    return this.http.put<void>(url, {});
  }

  desaffecterHistoriqueSejourDeChambre(id: number): Observable<void> {
    const url = `${this.url}/desaffecterHistoriqueSejour/${id}`;
    return this.http.put<void>(url, {});
  }

  desaffecterEtatPropreteDeChambre(id: number): Observable<void> {
    const url = `${this.url}/desaffecterEtatProprete/${id}`;
    return this.http.put<void>(url, {});
  }
/*
  getPourcentagesParType(): Observable<Map<TypeChambre, number>> {
    const url = `${this.url}/pourcentages`;
    return this.http.get<Map<TypeChambre, number>>(url);
  }*/
  getPourcentagesParType(): Observable<{ SIMPLE: number; DOUBLE: number; TRIPLE: number }> {
    const url = `${this.url}/pourcentages`;
    return this.http.get<{ SIMPLE: number; DOUBLE: number; TRIPLE: number }>(url);
  }

}
