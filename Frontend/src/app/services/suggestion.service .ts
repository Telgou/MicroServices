import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { suggestion } from '../model/suggestion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class suggestionService {
  private url: String = 'http://localhost:8099/Suggestion/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
 
  constructor(private http:HttpClient) { }
  getsuggestion():Observable<any> {
    return this.http.get(`${this.url}restieve-all-suggestions`);
  }
  suggestionById(suggestion:suggestion) {
    return this.http.get(this.url+"remove-Suggestion/"+suggestion.idSuggestion);

  }
  addSuggestion(suggestion: suggestion): Observable<suggestion> {
    return this.http.post<suggestion>(`${this.url}add-Suggestion`, suggestion);
  }
  removeSuggestion(suggestion: suggestion) {
    return this.http.delete(this.url+"remove-Suggestion/"+suggestion.idSuggestion);
  }
  
  updateSuggestion(suggestion: suggestion, id: number): Observable<suggestion> {
    const updateUrl = `${this.url}update-Suggestion/${id}`;
    return this.http.put<suggestion>(updateUrl, suggestion);
  }
 
}
