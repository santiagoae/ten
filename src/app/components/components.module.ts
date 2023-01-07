import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { AlianzasComponent } from './alianzas/alianzas.component';
import { ComoLlegarComponent } from './como-llegar/como-llegar.component';
import { FooterComponent } from './footer/footer.component';
import { EspecialistasHistoriaComponent } from './especialistas-historia/especialistas-historia.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { ContactenosComponent } from './contactenos/contactenos.component';
import { CitasCorreoComponent } from './citas-correo/citas-correo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';




@NgModule({
  declarations: [
    NavBarComponent,
    CarruselComponent, 
    ServiciosComponent, 
    EspecialistasComponent, 
    AlianzasComponent, 
    ComoLlegarComponent, 
    FooterComponent, 
    EspecialistasHistoriaComponent, 
    PreguntasFrecuentesComponent, 
    ContactenosComponent, 
    CitasCorreoComponent, 
    
    
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SlickCarouselModule 
  ],
  exports: [
    NavBarComponent,
    CarruselComponent,
    ServiciosComponent,
    EspecialistasComponent,
    AlianzasComponent,
    ComoLlegarComponent,
    FooterComponent,
    EspecialistasHistoriaComponent,
    CitasCorreoComponent,
  ]
})
export class ComponentsModule { }
