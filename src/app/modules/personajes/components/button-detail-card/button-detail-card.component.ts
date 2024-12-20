import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-detail-card',
  templateUrl: './button-detail-card.component.html',
  styleUrls: ['./button-detail-card.component.css']
})
export class ButtonDetailCardComponent implements OnInit {

  @Output() personajeSelected : EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {}

  onClick(){
    this.personajeSelected.emit();
  }

}
