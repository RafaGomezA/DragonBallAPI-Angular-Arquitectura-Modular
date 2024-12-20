import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';
import { DetailPersonajeComponent } from './components/detail-personaje/detail-personaje.component';

const routes: Routes = [
    { path: '', component: PersonajesListComponent },
    { path: 'detail/:id', component: DetailPersonajeComponent },
    
   
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }

/*Este archivo contiene las rutas específicas para el módulo PersonajesModule.



Resumen del flujo de rutas:

* Usuario accede a la raíz (http://localhost:4200):
  - Redirige a /personajesList. (de app-routing.module.ts)
* Usuario accede a /personajesList:
  - Se carga el módulo PersonajesModule, y el PersonajesRoutingModule carga el componente PersonajesListComponent.
* Usuario accede a /personajesList/detail/:id:
  - El PersonajesRoutingModule carga el componente DetailPersonajeComponent y pasa el parámetro id.
*/