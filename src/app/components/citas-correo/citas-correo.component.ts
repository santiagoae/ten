import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { correoModel } from 'src/app/models/correo.model.js';
import { CorreoService } from 'src/app/services/correo.service';
// import {Email} from '../../../assets/js/smtp';


@Component({
  selector: 'app-citas-correo',
  templateUrl: './citas-correo.component.html',
  styleUrls: ['./citas-correo.component.scss']
})
export class CitasCorreoComponent implements OnInit {

  citas: FormGroup;
  fechaActual: any;
  correoModel: correoModel;

  constructor(
    private fb: FormBuilder,
              private correoSvc: CorreoService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.fechaActual = moment().format("YYYY-MM-DD");
  }


  crearFormulario(){
    this.citas = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{7,10}")]],
      service: ['', Validators.required],
      tentative_date: ['', Validators.required],
    })
  }

  agendar(){
    this.correoSvc.agendarCita(this.citas.value).subscribe({
      next: res => {
        alert(res.response);
        this.citas.reset();
        window.location.reload();        
      },
      error: err => {
        alert(err.error)
      }
    })
  }

}
