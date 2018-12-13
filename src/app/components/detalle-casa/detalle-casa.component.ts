import { Component, OnInit, Input } from '@angular/core';
import { Casa } from 'src/app/models/casa';

@Component({
  selector: 'app-detalle-casa',
  templateUrl: './detalle-casa.component.html',
  styleUrls: ['./detalle-casa.component.scss']
})
export class DetalleCasaComponent implements OnInit {
  _casa: Casa;

  @Input('_casa') set casa(value: Casa) {
    if (value) {
      this._casa = value;
    } else {
      console.debug('fruta undefined => new Fruta()');
      this._casa = new Casa();
    }
  }

  get casa(): Casa {
    return this._casa;
  }

  constructor() {
    console.trace('DetalleCasaComponent constructor');
  }

  ngOnInit() {
    console.trace('DetalleCasaComponent ngOnInit');
  }

}
