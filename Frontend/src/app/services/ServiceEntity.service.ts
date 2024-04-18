import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServiceEntity } from '../model/ServiceEntity'; // Adjust the import path

@Injectable({
  providedIn: 'root',
})
export class ServiceService { // Adjust the service name

  private url: string = 'http://localhost:8099/serviceEntity'; // Adjust the URL based on your backend endpoint
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addService(service: ServiceEntity): Observable<ServiceEntity> {
    return this.http.post<ServiceEntity>(`${this.url}/addService`, service, this.httpOptions);
  }

  updateService(id: number, service: ServiceEntity): Observable<ServiceEntity> {
    return this.http.put<ServiceEntity>(`${this.url}/updateService/${id}`, service, this.httpOptions);
  }

  deleteService(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/deleteService/${id}`);
  }

  getAllServices(): Observable<ServiceEntity[]> {
    return this.http.get<ServiceEntity[]>(`${this.url}/getAllServices`);
  }

  generateServiceReportPdf(idService: number): Observable<string> {
    return this.http.get<string>(`${this.url}/generateServiceReportPdf/${idService}`);
  }
  getServiceById(id: number): Observable<ServiceEntity> {
    return this.http.get<ServiceEntity>(`${this.url}/getServiceById/${id}`);
  }

}
