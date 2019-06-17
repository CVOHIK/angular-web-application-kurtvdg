import { Component, OnInit } from '@angular/core';
import { Feature } from '../services/drink-fonteinen';
import { DrinkFonteinenService } from '../services/drink-fonteinen.service';

@Component({
  selector: 'app-drink-fonteinen-map',
  templateUrl: './drink-fonteinen-map.component.html',
  styleUrls: ['./drink-fonteinen-map.component.scss']
})
export class DrinkFonteinenMapComponent implements OnInit {
  lat: number = 51.219782;
  lng: number = 4.416141;
  //zoom: number = 14;

  private _drinkFonteinen:Feature[];

  constructor(private dataSrv:DrinkFonteinenService) { }

  ngOnInit() {
    this.dataSrv.GetDrinkFonteinen().subscribe(data => {console.log(data.features); this._drinkFonteinen = data.features});
  }
}
