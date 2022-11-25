import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CitasService } from '../../servicios/citas.service';
import { MostrarBotonService } from '../../servicios/mostrar-boton.service';
import { AgendaService } from '../agenda/services/agenda.service';
import { Cita } from '../modelo/cita';

@Component({
  selector: 'app-tratamientos',
  templateUrl: './tratamientos.component.html',
  template: `<button
    type="button"
    class="btn btn-outline-success "
    (click)="actualizarAgenda(item)"
  >
    <i class="fa-regular fa-pen-to-square"></i>
  </button>`,
  styleUrls: ['./tratamientos.component.scss'],
})
export class TratamientosComponent implements OnInit {
  cita: Cita[] = [];
  tratamientosForm: FormGroup;
  @Output() mostrarBoton = new EventEmitter<boolean>();
  @Input() mostrarId: number;
  constructor(
    private fb: FormBuilder,
    public citasSrv: CitasService,
    private agendaSrv: AgendaService,
    private router: Router,
    private MostrarBotonService: MostrarBotonService
  ) {}

  ngOnInit(): void {
    this.getCitas();
    this.crearFormulario();

    this.agendaSrv.cita = null;
  }

  crearFormulario() {
    this.tratamientosForm = this.fb.group({
      cedula: ['', Validators.required],
    });
  }

  getCitasByCedula() {
    let v3 = this.tratamientosForm.value;
    console.log('esta es la cita ' + v3);
    this.citasSrv.getCitasByCedula(v3).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response) {
          this.cita = Response;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getCitas() {
    this.citasSrv.getAllCitas().subscribe(
      (Response) => {
        console.log(Response);
        this.cita = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(cita) {
    this.citasSrv.deleteCitas(cita.id, cita.eventoAgendaId).subscribe(
      (Response) => {
        //console.log(Response)
        if (Response) {
          window.location.reload();
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  actualizarAgenda(cita: Cita) {
    this.agendaSrv.cita = cita;
    this.router.navigate(['agenda']);
  }

}
