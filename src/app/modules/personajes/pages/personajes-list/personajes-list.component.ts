import { Component, OnInit } from '@angular/core';
import { IPersonaje, Item } from 'src/app/core/IPersonaje.model';
import { RestServiceService } from 'src/app/services/personajes/rest-service.service';

@Component({
  selector: 'app-personajes-list',
  templateUrl: './personajes-list.component.html',
  styleUrls: ['./personajes-list.component.css']
})

export class PersonajesListComponent implements OnInit {

  public listaPersonajes: Item[] = []; // Almacena los personajes

  constructor(private restService: RestServiceService) { }

  ngOnInit(): void {
    this.cargarLista();
  }

  public cargarLista(): void {
    this.restService.getAllPersonajes().subscribe((datos) => {
      this.listaPersonajes = datos.items; // Extrae la lista de personajes desde `items`
      console.log(this.listaPersonajes);
    });
  }
}
