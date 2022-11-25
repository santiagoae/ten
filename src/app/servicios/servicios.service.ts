import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  private API_SERVER = 'http://localhost:8080/servicios/';

  constructor(private httpClient: HttpClient) {}

  public getAllServicios(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveServicios(servicio: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, servicio);
  }

  public deleteServicios(id: string): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + 'delete/' + id  );
  }
}

