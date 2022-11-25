import {Medico} from '../modelo/medico';
import {Servicios} from '../modelo/servicios';

export interface Cita{
    id?:string,
    cedula:string,
    correo:string,
    fechaInicio: string,
    fechaFin: string,
    medico : Medico,
    servicio : Servicios,
    usuario:string,
    eventoAgendaId:string,
}