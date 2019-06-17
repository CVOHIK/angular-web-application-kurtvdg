import { RootObject } from './drink-fonteinen';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkFonteinenService {

  constructor( private http : HttpClient) { }

  private _url : string = "https://geodata.antwerpen.be/arcgissql/rest/services/P_Portal/portal_publiek4/MapServer/265/query?where=1%3D1&outFields=*&outSR=4326&f=json";

  GetDrinkFonteinen():Observable<RootObject>{
    return this.http.get<RootObject>(this._url);
  }
}
