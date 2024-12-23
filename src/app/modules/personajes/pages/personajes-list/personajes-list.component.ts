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

    // Detectar si hay un parámetro 'name' en la URL
    this.activatedRoute.params.subscribe((params) => {
      const name = params['name'];
      if (name) {
        this.buscarPersonajes(name);
      }
    });
  }


  public cargarLista(): void {
    this.restService.getAllPersonajes().subscribe((datos) => {
      this.listaPersonajes = datos.items; // Extrae la lista de personajes desde `items`
      console.log(this.listaPersonajes);
    });
  }


  //Buscar personaje
 public buscarPersonajes(name: string): void {
  this.restService.getPersonajesByName(name).subscribe({
    next: (resultados) => {
      if (resultados.length > 0) {
        this.listaPersonajes = resultados; // Actualiza la lista si hay resultados

      } else {
        console.log(`No se encontraron personajes con el nombre "${name}".`);
      }
    },
    error: (error) => {
      console.error(`Error al buscar personajes con el nombre "${name}":`, error);
    },
  });
}
  public limpiarBusqueda(): void {
    this.router.navigate(['/']);
    this.cargarLista(); // Llama nuevamente al método que carga todos los personajes
  }

}
