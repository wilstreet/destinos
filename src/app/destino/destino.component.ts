import { DestinoViaje } from './../modelo/destinos.modelo';
import { Component, OnInit, Input, HostBinding} from '@angular/core';


@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.scss']
})
export class DestinoComponent implements OnInit {


  @Input() destino: DestinoViaje;
  @HostBinding('attr.class') cssClass = 'col-md-4';

  constructor() {
  }

  ngOnInit(): void {
  }

}
