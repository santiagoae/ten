import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from '../baseURL';
import { correoModel } from '../models/correo.model';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  httpOption: object;
  constructor(private http: HttpClient) { 
    this.httpOption = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    }
  }
  
  agendarCita(data: correoModel ):Observable<any>{
    return this.http.post<correoModel>(`${baseUrl}/envio`,data, this.httpOption);
  }
}
