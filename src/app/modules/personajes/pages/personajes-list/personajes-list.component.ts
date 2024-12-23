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

  public meta: any = {}; // Información meta de la API (totalPages, currentPage, etc.). Mirar la interface
  public currentPage: number = 1; // Página actual
  public isSearchMode: boolean = false; // Indica si estás en modo búsqueda para esconder o no la paginacion con un ngIf
  

  constructor(private restService: RestServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.cargarLista(this.currentPage);

    // Detectar si hay un parámetro 'name' en la URL
    this.activatedRoute.params.subscribe((params) => {
      const name = params['name'];
      if (name) {
        this.buscarPersonajes(name);
      }
    });
  }


  public cargarLista(page: number): void {
    this.restService.getPersonajesPaginados(page).subscribe({
      next: (datos) => {
        this.listaPersonajes = datos.items; // Actualiza la lista con los personajes de la página actual

        this.meta = datos.meta; // Actualiza la información meta (para saber el número de página). Mirar la interface
        this.currentPage = this.meta.currentPage; // Actualiza la página actual
      },
      error: (error) => {
        console.error('Error al cargar personajes:', error);
      },
    });
  }


  //Buscar personaje
 public buscarPersonajes(name: string): void {
  this.isSearchMode= true; //para que no salga la paginacion en la busqueda (ngIf)
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

    this.currentPage = 1; // Restablecer a la primera página
    this.cargarLista(this.currentPage); // Cargar la primera página
  }



  

}
