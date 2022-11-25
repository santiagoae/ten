import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-completar-registro',
  templateUrl: './completar-registro.component.html',
  styleUrls: ['./completar-registro.component.scss']
})
export class CompletarRegistroComponent implements OnInit {

  completarRegistro: FormGroup

  constructor(private fb: FormBuilder,
              private route: Router) { }

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario(){
    this.completarRegistro = this.fb.group({
      cedula: ["", Validators.required]
    })
  }

  completar(){
    this.route.navigate(['perfilUsuario']);
  }

}
