import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Restaurant } from '../model/Restaurant'; // Import the Restaurant model

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  private url: string = 'http://localhost:8089/restaurant';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addRestaurant(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post<Restaurant>(`${this.url}/addRestaurant`, restaurant, this.httpOptions);
  }

  updateRestaurant(id: number, restaurant: Restaurant): Observable<Restaurant> {
    const apiUrl = `${this.url}/updateRestaurant/${id}`;
    return this.http.put<Restaurant>(apiUrl, restaurant, this.httpOptions);
  }

  deleteRestaurant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/deleteRes/${id}`);
  }

  getAllRestaurants(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(`${this.url}/allRestaurant`);
  }
  getRestaurantById(id: any): Observable<any> {
    return this.http.get(this.url + '/restaurantById/' + id);
  }
  getRestaurantIdByName(nomR: string): Observable<number | null> {
    const url = `${this.url}/restaurantIdByName/${nomR}`;
    return this.http.get<number>(url).pipe(
      map((id) => {
        console.log(`Fetched Restaurant ID for ${nomR}:`, id);
        return id;
      }),
      catchError((error) => {
        console.error('Error fetching Restaurant ID:', error);
        return of(null);
      })
    );
  }
        }
