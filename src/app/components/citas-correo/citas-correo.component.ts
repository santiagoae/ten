import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { NgToastService } from 'ng-angular-popup';
import { correoModel } from 'src/app/models/correo.model.js';
import { CorreoService } from 'src/app/services/correo.service';
import {Email} from '../../../assets/js/smtp';


@Component({
  selector: 'app-citas-correo',
  templateUrl: './citas-correo.component.html',
  styleUrls: ['./citas-correo.component.scss']
})
export class CitasCorreoComponent implements OnInit {

  // citas: FormGroup;
  fechaActual: any;
  correoModel: correoModel;

  constructor(
    // private fb: FormBuilder,
              private alerts: NgToastService,
              private correoSvc: CorreoService) { }

  ngOnInit(): void {
    // this.crearFormulario();
    this.fechaActual = moment().format("YYYY-MM-DD");
  }


  // crearFormulario(){
  //   this.citas = this.fb.group({
  //     name: ['', Validators.required],
  //     email: ['', Validators.required],
  //     phone: ['', Validators.required],
  //     service: ['', Validators.required],
  //     tentative_date: ['', Validators.required],
  //   })
  // }

  // agendar(){
  //   this.correoSvc.agendarCita(this.citas.value).subscribe({
  //     next: res => {
  //       this.alerts.success({detail: res.response, summary: 'Te responderemos a ' + this.citas.get('email')?.value, duration:6000});
  //       console.log(this.citas.value)
  //       this.citas.reset();
  //     },
  //     error: err => {
  //       this.alerts.error({detail: err.error, summary: 'intentalo de nuevo', duration:6000});
  //     }
  //   })
  // }

  // agendar() {
  //   this. correoModel = this.citas.value;
  //   console.log(this.correoModel);
  //   Email.send({
  //   Host : 'smtp.elasticemail.com',
  //   Username : 'kawadsign@gmail.com',
  //   Password : '94EC21B627E0E5E351B5CE08477B3774A639',
  //   To : 'citas@tensaludoral.com',
  //   From : `kawadsign@gmail.com`,
  //   Subject : this.correoModel.service,
  //   Body : `
  //   <br/> <b>Name: </b>${this.correoModel.name} <br /> <b>Email: </b>${this.correoModel.email}<br /> <b>Phone: </b>${this.correoModel.phone}<br /> <b>Subject: </b>${this.correoModel.service}<br /> <b>Tentative_Date:</b> <br /> ${this.correoModel.tentative_date} <br><br> <b>~End of Message.~</b> `
  //   }).then( message => {alert(message); this.citas.reset(); } );

  //   }


}
