import { Element } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss']
})
export class PreguntasFrecuentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  const categorias = document.querySelectorAll('#categorias .categoria');
  console.log(categorias)
  const contenedorPreguntas = document.querySelectorAll('.contenedor-preguntas');
  let categoriaActiva
  console.log(contenedorPreguntas)
  
  categorias.forEach((categoria) => {
    categoria.addEventListener('click', (e) => {
    console.log(e.currentTarget as HTMLElement);
    categorias.forEach((elemento) =>{
      elemento.classList.remove('activa')
    })
    const Element  = e.currentTarget as HTMLElement
    Element.classList.toggle('activa');
    
    categoriaActiva = (categoria as HTMLElement).dataset['categoria']

    // activamos el contenedor que corresponde 
    contenedorPreguntas.forEach((contenedor) =>{

      console.log(((contenedor as HTMLElement).dataset['categoria']))
      console.log(categoriaActiva)

      if(((contenedor as HTMLElement).dataset['categoria']) == categoriaActiva){
        contenedor.classList.add('activo')
        console.log('if ' + contenedor.classList.value)

      }else{
        contenedor.classList.remove('activo');
        console.log('else ' + contenedor.classList.value)
      }

    })
    })
  })

  //Preguntas 

  const preguntas  = document.querySelectorAll('.preguntas .contenedor-pregunta')
  preguntas.forEach((pregunta) =>{
    pregunta.addEventListener('click', (e) =>{
      (e.currentTarget as HTMLElement).classList.toggle('activa')

      const respuesta = pregunta.querySelectorAll('.respuesta')
      const alturarespuesta = (respuesta as unknown as HTMLElement).scrollHeight;

      
      if (!(respuesta as unknown as HTMLElement).style.maxHeight){
        (respuesta as unknown as HTMLElement).style.maxHeight = alturarespuesta + 'px'
      }else{
        
      }
    })
  })

  }



}
