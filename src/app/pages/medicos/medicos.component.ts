import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctoresService } from 'src/app/services/doctores.service';
import { Medico } from '../modelo/medico';
import { Servicios } from '../modelo/servicios';
@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.component.html',
  styleUrls: ['./medicos.component.scss'],
})
export class MedicosComponent implements OnInit {
  medico: Medico[] = [];
  medicoForm! : FormGroup;
  servicioForm! : FormGroup;
  medicos: any;
 

  constructor(public fb: FormBuilder, public Medico: DoctoresService) {}

  ngOnInit(): void {
    this.servicioForm = this.fb.group({
      id: ['', Validators.required],
    });

    this.medicoForm = this.fb.group({
      id: [''],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      servicio: this.servicioForm,
    });

    this.Medico.getAllDoctores().subscribe(
      (Response) => {
        this.medicos = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getMedicos() {
    this.Medico.getAllDoctores().subscribe(
      (Response) => {
        console.log(Response);
        this.medico = Response;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  guardar(): void {
    let v1 = this.medicoForm.value;
    console.log(v1);
    this.Medico.saveDoctores(v1).subscribe(
      (Response) => {
        this.medicoForm.reset();
        this.medicos = this.medicos.filter(
          (medicos) => Response.id != medicos.id
        );
        this.medicos.push(Response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  eliminar(medicos) {
    this.Medico.deleteDoctores(medicos.id).subscribe(
      (Response) => {
        console.log(Response);
        if (Response === true) {
          this.medicos.pop(medicos);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  editar(medicos) {
    this.medicoForm.setValue({
      id: medicos.id,
      nombre: medicos.nombre,
      apellidos: medicos.apellidos,
      servicio: medicos.servicio.id,
    });
  }

  volver() {
    document.location.href = '/perfilAdmin';
  }
}
