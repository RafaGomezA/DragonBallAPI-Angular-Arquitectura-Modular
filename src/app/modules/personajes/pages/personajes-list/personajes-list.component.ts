import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPersonaje, Item } from 'src/app/core/IPersonaje.model';
import { RestServiceService } from 'src/app/services/personajes/rest-service.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})

export class PersonajesListComponent implements OnInit {

  public listaPersonajes: Item[] = []; // Almacena los personajes
  

  constructor(private restService: RestServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarLista();

    const name = this.activatedRoute.snapshot.paramMap.get('name');
    if(name){
      this.buscarPersonajes(name);
    }
  }

  public cargarLista(): void {
    this.restService.getAllPersonajes().subscribe((datos) => {
      this.listaPersonajes = datos.items; // Extrae la lista de personajes desde `items`
      console.log(this.listaPersonajes);
    });
  }


  //Buscar personaje
  public buscarPersonajes(name: string): void {
    this.restService.getPersonajesByName(name).subscribe((resultados) => {
      this.listaPersonajes = resultados; // Actualiza los resultados de la búsqueda
    });
  }

  public limpiarBusqueda(): void {
    this.router.navigate(['/']);
    this.cargarLista(); // Llama nuevamente al método que carga todos los personajes
  }

}
