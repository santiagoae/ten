import { Injectable } from '@angular/core';
import { Cita } from '../../modelo/cita';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  cita: Cita | null;

  constructor() { }
}
