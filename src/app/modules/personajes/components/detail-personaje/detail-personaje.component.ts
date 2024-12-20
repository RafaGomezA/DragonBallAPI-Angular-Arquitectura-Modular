import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from 'src/app/core/IPersonaje.model';
import { RestServiceService } from 'src/app/services/personajes/rest-service.service';


@Component({
  selector: 'app-detail-personaje',
  templateUrl: './detail-personaje.component.html',
  styleUrls: ['./detail-personaje.component.css']
})
export class DetailPersonajeComponent implements OnInit {

  personaje !: Item;

  constructor( private rutaActiva: ActivatedRoute, private restService: RestServiceService) { }


  ngOnInit(): void {
    const id = this.rutaActiva.snapshot.params['id']; // Convierte el id a número

    // Suscríbete al observable para obtener el personaje
    this.restService.getPersonajeById(id).subscribe({
      next: (data: Item) => {
        this.personaje = data; // Asigna los datos al personaje
        console.log('Personaje recibido:', this.personaje);
      },
      error: (err) => {
        console.error('Error al obtener el personaje:', err);
      }
    });
  }



}
