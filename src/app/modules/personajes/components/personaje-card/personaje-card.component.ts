import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/core/IPersonaje.model';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.css']
})
export class PersonajeCardComponent implements OnInit {

  @Input() personaje!: Item;


  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  onDetailPersonaje() {
    this.router.navigate(['detail', this.personaje.id]);
  }

}
