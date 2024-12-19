import { NgModule } from '@angular/core';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { PersonajeCardComponent } from './components/personaje-card/personaje-card.component';
import { CommonModule } from '@angular/common';
import { PersonajesRoutingModule } from './personajes-routing.module';


@NgModule({
  declarations: [
    PersonajesListComponent,
    PersonajesListComponent,
    PersonajeCardComponent
  ],
  imports: [
    CommonModule,
    PersonajesRoutingModule

  ]

})
export class PersonajesModule { }