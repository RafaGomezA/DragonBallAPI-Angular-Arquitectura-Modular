import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  public personajeName: string ="";

  constructor(private router: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }


  public searchPersonaje(){
    if (this.personajeName.trim()) {
      console.log("Desde searchComponent: "+ this.personajeName.toLowerCase());
      this.router.navigate([`personajeSearch/${this.personajeName.toLowerCase()}`]);// esta ruta tambien carga personajeListComponent
      this.personajeName = '';
    }
  }


}
