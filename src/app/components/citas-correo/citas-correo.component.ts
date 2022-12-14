import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-citas-correo',
  templateUrl: './citas-correo.component.html',
  styleUrls: ['./citas-correo.component.scss']
})
export class CitasCorreoComponent implements OnInit {

  citas: FormGroup;
  fechaActual: any;

  constructor(private fb: FormBuilder,
              private alerts: NgToastService) { }

  ngOnInit(): void {
    this.crearFormulario();
    this.fechaActual = moment().format("YYYY-MM-DD");
  }


  crearFormulario(){
    this.citas = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      service: ['', Validators.required],
      fecha_tentativa: ['', Validators.required],
    })
  }

  agendar(){
    this.alerts.success({detail: 'Tu cita esta siendo evaluada', summary: 'Te responderemos a ' + this.citas.get('email')?.value, duration:6000});
    console.log(this.citas.value)
    this.citas.reset();
  }
  

}
