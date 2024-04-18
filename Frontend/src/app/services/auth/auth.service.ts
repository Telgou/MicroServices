import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { AuthenticationRequest } from 'src/app/model/AuthenticationRequest';
import { AuthenticationResponse } from 'src/app/model/AuthenticationResponse';
import { RegisterRequest } from 'src/app/model/RegisterRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 private baseUrl: String='http://localhost:8089/foyer/api/v1/auth'
 constructor(
  private http: HttpClient
 ){}
 register(
  registerRequest: RegisterRequest
 ){
  return this.http.post<AuthenticationResponse>
  (`${this.baseUrl}/register`,registerRequest);
 }
 login(
  authRequest: AuthenticationRequest
 ){
  return this.http.post<AuthenticationResponse>
  (`${this.baseUrl}/authenticate`, authRequest)
 }

}
