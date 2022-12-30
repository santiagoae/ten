import { Component, OnInit, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-especialistas',
  templateUrl: './especialistas.component.html',
  styleUrls: ['./especialistas.component.scss']
})
export class EspecialistasComponent implements OnInit {

  @ViewChild('slickModal')
  slickModal!: SlickCarouselComponent;

  constructor() { }

  ngOnInit(): void {
  }
  slides = [
    {img: "assets/Imagenes/JaimeOrtiz.jpeg", description: "Jaime Alberto Ortiz", especiality: "Odontólogo", linkButton: "/especialistas#jaime"},
    {img: "assets/Imagenes/guatavo cirujano.jpeg", description: "Gustavo Adolfo Jiménez", especiality: "Cirujano Oral y Maxilofacial", linkButton: "/especialistas#gustavo"},
    {img: "assets/Imagenes/ani periodoncista.jpeg", description: "Anny Marcela Vivares", especiality: "Periodoncista", linkButton: "/especialistas#anny"},
    {img: "/assets/Imagenes/ubier.jpeg", description: "Ubier Jeovanny López", especiality: "Especialista Clínico en Ortodoncia", linkButton: "/especialistas#Jeovanny"},
    {img: "assets/Imagenes/diego.jpg", description: "Diego Alejandro Arbeláez", especiality: "Odontología integral y Ortodoncia", linkButton: "/especialistas#diego"},
    {img: "assets/Imagenes/Ivone.jpeg", description: "Ivonne Daniela Chacon Tobar", especiality: "Odontóloga general", linkButton: "/especialistas#ivonne"},
    {img: "assets/Imagenes/jaime_alberto.jpg", description: "Jaime Alberto Arbelaez", especiality: "Odontólogo general y Endodoncista", linkButton: "/especialistas#Jaime_Arbelaez"},
  ];
  slideConfig = {
    slidesToShow:2, 
    slidesToScroll: 1,
    // dots: true, 
    infinite: false, 
    nextArrow:false, 
    prevArrow: false
  };

  prevImg(){
    this.slickModal.slickPrev();
  }
  nextImg(){
    this.slickModal.slickNext();
  }
  
 

}
