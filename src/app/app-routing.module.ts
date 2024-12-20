import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesModule } from './modules/personajes/personajes.module';

const routes: Routes = [
  { path: '', redirectTo: 'personajesList', pathMatch: 'full' },
  {
    path: 'personajesList',
      loadChildren: () =>
        import('./modules/personajes/personajes.module').then((m) => m.PersonajesModule),
  },
  { path: '**', redirectTo: 'personajesList' },
]; // si la ruta es '' carga la ruta personajesList y si no carga children

@NgModule({
  imports: [RouterModule.forRoot(routes), PersonajesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }


/*módulo principal de rutas de la aplicación. Aquí se define las rutas globales 
 y se configura la navegación de los módulos principales (como PersonajesModule).

 Relación: Cuando alguien navega a /personajesList, Angular carga el archivo PersonajesRoutingModule definido en el módulo PersonajesModule.
 

 Si el usuario accede a la raíz (http://localhost:4200), será redirigido automáticamente a la ruta /personajesList.
 */