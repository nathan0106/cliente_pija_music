import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8082/v1'; // Cambia esta URL base según tu backend

  constructor(private http: HttpClient) {}

  // Método GET
  getData(endpoint: string, params: any = {}): Observable<any> {
    return this.http.get(`${this.baseUrl}/${endpoint}`, { params });
  }

  // Método POST
  postData(endpoint: string, data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/${endpoint}`, data);
  }

  // Método PUT
  putData(endpoint: string, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${endpoint}`, data);
  }

  // Método DELETE
  deleteData(endpoint: string, id: number | string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${endpoint}/${id}`);
  }
}
