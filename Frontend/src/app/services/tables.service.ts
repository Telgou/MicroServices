import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tables } from '../model/Tables'; // Update import to Tables

@Injectable({
  providedIn: 'root',
})
export class TablesService {

  private url: string = 'http://localhost:8089/tables'; // Adjust the URL based on your backend endpoint
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addTable(table: Tables): Observable<Tables> {
    return this.http.post<Tables>(`${this.url}/addTable`, table, this.httpOptions);
  }

  updateTable(id: number, table: Tables): Observable<Tables> {
    return this.http.put<Tables>(`${this.url}/updateTable/${id}`, table, this.httpOptions);
  }

  deleteTable(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/deleteTable/${id}`);
  }

  getAllTables(): Observable<Tables[]> {
    return this.http.get<Tables[]>(`${this.url}/allTables`);
  }
  getRestaurantIdByName(nomR: string): Observable<number | null> {
    return this.http.get<number>(`${this.url}/restaurantIdByName/${nomR}`);
  }
  getTableById(id: number): Observable<Tables> {
    return this.http.get<Tables>(`${this.url}/getTableById/${id}`);
  }

}
