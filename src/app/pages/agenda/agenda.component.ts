import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cita } from '../modelo/cita';
import { CitasService } from './../../servicios/citas.service';
import { DoctoresService } from './../../servicios/doctores.service';
import { MostrarBotonService } from './../../servicios/mostrar-boton.service';
import { ServiciosService } from './../../servicios/servicios.service';
import { AgendaService } from './services/agenda.service';

import { Medico } from '../modelo/medico';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.scss'],
})
export class AgendaComponent implements OnInit {
  // Forms
  agendaForm: FormGroup;
  medicoForm: FormGroup;
  servicioForm: FormGroup;

  modeloCita: Cita;
  idEdit: number;
  mostrar: any = 'true';
  mostrar2: boolean;
  nombreUsuario: any;
  correo: any;
  servicios: any;
  medicos: any;
  date: Date = new Date();
  mes = this.date.getMonth() + 1;
  fechaC =
    this.date.getFullYear() +
    '-' +
    this.mes +
    '-' +
    this.date.getDate() +
    'T' +
    this.date.getHours() +
    ':' +
    this.date.getMinutes();

  fechaMin: string = this.fechaC;

  cita: Cita | null = null;
  //fechaMin: string = '2022-11-20T00:00';

  constructor(
    public serviciosService: ServiciosService,
    public doctoresService: DoctoresService,
    public citasService: CitasService,
    public mostrarService: MostrarBotonService,
    private fb: FormBuilder,
    private agendaSrv: AgendaService
  ) {}

  ngOnInit(): void {
    //TODO organizar las fechas en formato ISO String
    const fecha = new Date().toISOString();
    console.log(fecha);
    
    this.cita = this.agendaSrv.cita;

    this.mostrar2 = true;
    this.nombreUsuario = sessionStorage.getItem('nombre');
    this.correo = sessionStorage.getItem('correo');
    this.cargarListas();
    this.crearFormulario();


    if (this.cita) {
      this.agendaForm.patchValue(this.agendaSrv.cita!);
    }
  }

  cargarListas() {
    this.serviciosService.getAllServicios().subscribe(
      (Response) => {
        this.servicios = Response;
      },
      (error) => {
        console.error(error);
      }
    );

    if (this.cita) {
      this.cargarEspecialistas(this.cita?.servicio.id);
    }
  }

  cargarEspecialistas(idEspecialidad: string = '') {
      this.doctoresService.getAllDoctoresByEspecialidad(idEspecialidad).subscribe(
        (infoMedicos: Medico[]) => this.medicos = infoMedicos
      );
  }

  crearFormulario() {
    this.servicioForm = this.fb.group({
      id: ['', Validators.required],
    });

    this.medicoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
    });

    this.agendaForm = this.fb.group({
      nombre: [this.nombreUsuario],
      fechaInicio: ['', Validators.required],
      fechaFin: ['', Validators.required],
      correo: [this.correo, Validators.required],
      medico: this.medicoForm,
      cedula: ['', Validators.required],
      servicio: this.servicioForm,
      eventoAgendaId: [''],
      // FORMATO FECHA "2022-11-15T05:00:00-05:00"
    });
  }

  guardar(): void {
    console.log('Esta es Fecha Inicio ' + this.agendaForm.value.fechaInicio);
    console.log('Esta es Fecha Fin ' + this.agendaForm.value.fechaFin);
    this.citasService.saveCitas(this.agendaForm.value).subscribe(
      (Response) => {
        window.location.reload();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actualizar() {
    this.modeloCita = this.agendaForm.value;
    let evento = String(localStorage.getItem('evento'));
    this.citasService.updateCitas(evento, this.modeloCita).subscribe(
      (Response) => {
        this.agendaForm.reset();
        if (Response) {
          this.mostrar2 = true;
          window.location.reload();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
