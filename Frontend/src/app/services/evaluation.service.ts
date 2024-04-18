import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { evaluation } from '../model/evaluation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class evaluationService {
  private url: String = 'http://localhost:8099/Evaluation/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/Json' }),
  };
  constructor(private http:HttpClient) { }
  getevaluation():Observable<any> {
    return this.http.get(`${this.url}restieve-all-evaluations`);
  }
  evaluationById(evaluation:evaluation) {
    return this.http.get(this.url+"remove-Evaluation/"+evaluation.idEvaluation);

  }
  addEvaluation(evaluation: evaluation): Observable<evaluation> {
    return this.http.post<evaluation>(`${this.url}add-Evaluation`, evaluation);
  }
  removeEvaluation(evaluation: evaluation) {
    return this.http.delete(this.url+"remove-Evaluation/"+evaluation.idEvaluation);
  }
  
  updateEvaluation(evaluation: evaluation, id: number): Observable<evaluation> {
    const updateUrl = `${this.url}update-Evaluation/${id}`;
    return this.http.put<evaluation>(updateUrl, evaluation);
  }
 
}
