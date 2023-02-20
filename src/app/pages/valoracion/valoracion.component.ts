import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.scss']
})
export class ValoracionComponent implements OnInit {

  valoracion: FormGroup;
  odontoGeneral: number; 
  ortodoncia: number; 
  periodoncia: number; 
  endodoncia: number; 
  odontopediatria: number; 
  ciruOral: number; 
  rehabiOral: number; 
  resultado: number; 

  constructor(private fb:FormBuilder,) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.valoracion = this.fb.group({
      odontoGeneral: ['', Validators.required],
      ortodoncia: ['', Validators.required],
      periodoncia: ['', Validators.required],
      endodoncia: ['', Validators.required],
      odontopediatria: ['', Validators.required],
      ciruOral: ['', Validators.required],
      rehabiOral: ['', Validators.required],
    })
  }

  calcular(){
    this.odontoGeneral = 0;
    this.ortodoncia = 0;
    this.periodoncia = 0;
    this.endodoncia = 0;
    this.ciruOral = 0;
    this.rehabiOral = 0;
    this.odontopediatria = 0;

    if (this.valoracion.get('odontoGeneral')?.value) {
      this.odontoGeneral = 45000;
    }
    if (this.valoracion.get('ortodoncia')?.value) {
      this.ortodoncia = 45000;
    }
    if (this.valoracion.get('periodoncia')?.value) {
      this.periodoncia = 45000;
    }
    if (this.valoracion.get('endodoncia')?.value) {
      this.endodoncia = 45000;
    }
    if (this.valoracion.get('odontopediatria')?.value) {
      this.odontopediatria = 35000;
    }
    if (this.valoracion.get('ciruOral')?.value) {
      this.ciruOral = 45000;
    }
    if (this.valoracion.get('rehabiOral')?.value) {
      this.rehabiOral = 45000;
    }
    this.resultado = this.odontoGeneral + this.ortodoncia + this.periodoncia + this.endodoncia + this.ciruOral + this.rehabiOral + this.odontopediatria
    this.valoracion.reset();
    alert('$ ' + this.resultado.toString() + ' COP');
  }
}
