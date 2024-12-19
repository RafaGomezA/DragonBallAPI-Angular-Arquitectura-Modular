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
]; // si la ruta es '' carga la ruta personajesList y si no carga children

@NgModule({
  imports: [RouterModule.forRoot(routes), PersonajesModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
