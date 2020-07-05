import { DestinoViaje } from './../modelo/destinos.modelo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-destino',
  templateUrl: './list-destino.component.html',
  styleUrls: ['./list-destino.component.scss']
})
export class ListDestinoComponent implements OnInit {

destinos: DestinoViaje[];

  constructor() {
    this.destinos = [];
  }

  ngOnInit(): void {
  }
  guardar(nombre:string, url:string):boolean {
    this.destinos.push( new DestinoViaje(nombre, url));
    return false;
  }

}
