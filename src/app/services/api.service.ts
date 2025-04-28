import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:8082/v1/'; 

  constructor(private http: HttpClient) {}

  // Ejemplo: obtener datos
  getDatos(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ruta`);
  }

  // Ejemplo: enviar datos
  postDatos(body: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/ruta`, body);
  }
}
