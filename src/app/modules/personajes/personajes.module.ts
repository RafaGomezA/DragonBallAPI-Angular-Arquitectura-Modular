import { NgModule } from '@angular/core';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { PersonajeCardComponent } from './components/personaje-card/personaje-card.component';
import { CommonModule } from '@angular/common';
import { PersonajesRoutingModule } from './personajes-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ButtonDetailCardComponent } from './components/button-detail-card/button-detail-card.component';
import { DetailPersonajeComponent } from './pages/detail-personaje/detail-personaje.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PersonajesListComponent,
    PersonajeCardComponent,
    ButtonDetailCardComponent,
    DetailPersonajeComponent,
    SearcherComponent,
  ],
  imports: [
    CommonModule, 
    PersonajesRoutingModule, 
    HttpClientModule,
    FormsModule],
})
export class PersonajesModule {}
/*Aquí se centraliza los componentes, páginas y rutas relacionadas con "Personajes"

 Relación: Este módulo importa el archivo PersonajesRoutingModule, que contiene las rutas específicas de "Personajes". 
 Es decir, las rutas internas como /detail/:id están configuradas aquí.
*/
