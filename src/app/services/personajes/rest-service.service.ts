import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPersonaje, Item} from 'src/app/core/IPersonaje.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestServiceService {

  basePersonajeUrl = "https://dragonball-api.com/api/characters";

  constructor(private httpClient: HttpClient) { }

  getAllPersonajes(): Observable<IPersonaje> { // aqui pongo toda la interface IPersonaje y el list buscare por Item[] que esta dentro de IPersonaje
    return this.httpClient.get<IPersonaje>(this.basePersonajeUrl);
  }

  getPersonajeById(id:number):Observable<Item>{
    return this.httpClient.get<Item>(this.basePersonajeUrl + "/" + id)
  }

  //Buscador por nombre
  getPersonajesByName(name: string): Observable<Item[]> {
    return this.getAllPersonajes().pipe(
      map((data) =>
        data.items.filter((personaje) =>
          personaje.name.toLowerCase().includes(name.toLowerCase())
        )
      )
    );
  }
}
