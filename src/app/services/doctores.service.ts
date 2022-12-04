import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoctoresService {

  private service = 'doctores';
  private API_SERVER = `${environment.api}/${this.service}`;

  constructor(
    private httpClient : HttpClient
  ) { }

  public getAllDoctores(): Observable<any>{
    return this.httpClient.get(this.API_SERVER)
  }

  public getAllDoctoresByEspecialidad(idEspecialidad): Observable<any>{
    
    return this.httpClient.get(`${this.API_SERVER}/${idEspecialidad}`);
  }

  public saveDoctores(medico: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, medico);
  }

  public deleteDoctores(id: string): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + 'delete/' + id  );
  }
}
