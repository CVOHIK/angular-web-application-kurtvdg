import { DrinkFonteinenService } from './../services/drink-fonteinen.service';
import { RootObject, Feature } from './../services/drink-fonteinen';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-drink-fonteinen',
  templateUrl: './drink-fonteinen.component.html',
  styleUrls: ['./drink-fonteinen.component.scss']
})
export class DrinkFonteinenComponent implements OnInit {

  private _drinkFonteinen:Feature[];
  private currentPage: number = 1;
  private latitude: number = 51.219782;
  private longitude: number = 4.416141;

  constructor(private dataSrv:DrinkFonteinenService) { }

  ngOnInit() {
    this.dataSrv.GetDrinkFonteinen().subscribe(data => {console.log(data.features); this._drinkFonteinen = data.features});
  }

  onClick(item:Feature) : void{
    console.log(item);
    this.latitude = item.geometry.y;
    this.longitude = item.geometry.x;
  }
}
