import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonajesListComponent } from './pages/personajes-list/personajes-list.component';

const routes: Routes = [
    { path: '', component: PersonajesListComponent },
    
   
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonajesRoutingModule { }
