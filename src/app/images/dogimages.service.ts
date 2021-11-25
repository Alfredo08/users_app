import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DogimagesService {

  constructor( private _http: HttpClient ) { }

  getDogImages(){
    return this._http.get( "https://dog.ceo/api/breeds/image/random/5" )
  }
}
